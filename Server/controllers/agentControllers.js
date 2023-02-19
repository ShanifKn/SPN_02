import agentModel from "../models/agentModel.js";
import busModel from "../models/busModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { aisleSeat, bookSeat, middleSeat, singleSeat, windowSeat } from "./BookingControllers.js";

// * FETCH BUS LIT *//
export const getBusList = async (req, res) => {
  try {
    const buses = await busModel.find();
    res.status(200).json({ buses: buses });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "Internal server error" });
  }
};

//* GET AVAIABLE SEATS FROM AGENT HAVE *//
export const getAvaiable = async (req, res) => {
  try {
    let token = req.header("Authorization");
    if (!token) return res.status(403).send("Access Denied");
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = verified;

    const seats = await agentModel.findById(id);
    const agent = seats.toObject();
    delete agent.password;

    res.status(200).json({ agent: agent });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "Internal server error" });
  }
};

//* BOOKING SEATS *//
export const addBooking = async (req, res) => {
  try {
    const { passenger, id } = req.body;
    const bus = await busModel.findById(id);

    passenger.sort((a, b) => {
      if (a.sex === "Female" && b.sex !== "Female") {
        return -1;
      } else if (b.sex === "Female" && a.sex !== "Female") {
        return 1;
      } else {
        return b.age - a.age;
      }
    });

    if (passenger.length <= 1) {
      let a = 0;
      const Booked = await singleSeat(passenger, id, a);
    } else {
      let a = 0;
      let b = 0;
      let c = 0;
      for (let i = 0; i < passenger.length; i++) {
        if (passenger[i].age >= 60) {
          const booked = await windowSeat(passenger[i], id, a);
          if (booked) continue;
          else if (!booked && a < bus.row) {
            a++;
            i--;
          } else if (a >= bus.row) {
            const booked = await middleSeat(passenger[i], id, b);
            if (booked) continue;
            else if (!booked && b < bus.row) {
              b++;
              i--;
            } else if (b >= bus.row) {
              const booked = await aisleSeat(passenger[i], id, c);
              if (booked) continue;
              else if (!booked && c < bus.row) {
                c++;
                i--;
              } else if (c >= bus.row) return console.log("Booked");
            }
          }
        } else {
          const booked = await bookSeat(passenger[i], id, a);
          if (booked) continue;
          else if (!booked && a < bus.row) {
            a++;
            i--;
          } else {
            console.log("Booked");
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
