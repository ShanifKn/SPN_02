import mongoose from "mongoose";
import busModel from "../models/busModel.js";

export const windowSeat = async (passenger, id, a) => {
  const windowSeat = await busModel.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(id) } },
    {
      $project: {
        [`seats.row${a}`]: {
          $filter: {
            input: `$seats.row${a}`,
            cond: { $and: [{ $eq: ["$$this.seat_type", "Window"] }, { $eq: ["$$this.booking", false] }] },
          },
        },
      },
    },
  ]);

  if (windowSeat[0].seats[`row${a}`]?.length) {
    const seatNumber = windowSeat[0].seats[`row${a}`][0].seatNumber;
    await busModel.updateOne(
      { _id: id, [`seats.row${a}`]: { $elemMatch: { seatNumber: seatNumber } } },
      {
        $set: {
          [`seats.row${a}.$[seat].booking`]: true,
          [`seats.row${a}.$[seat].passenger_name`]: passenger.name,
          [`seats.row${a}.$[seat].age`]: passenger.age,
          [`seats.row${a}.$[seat].gender`]: passenger.sex,
        },
      },
      { arrayFilters: [{ "seat.seatNumber": seatNumber }] }
    );
    return true;
  } else {
    return false;
  }

  //   else {
};
export const middleSeat = async (passenger, id, a) => {
  const middleSeat = await busModel.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(id) } },
    {
      $project: {
        [`seats.row${a}`]: {
          $filter: {
            input: `$seats.row${a}`,
            cond: { $and: [{ $eq: ["$$this.seat_type", "Middle"] }, { $eq: ["$$this.booking", false] }] },
          },
        },
      },
    },
  ]);
  if (middleSeat[0].seats[`row${a}`]?.length) {
    const seatNumber = middleSeat[0].seats[`row${a}`][0].seatNumber;
    console.log(seatNumber);
    await busModel.updateOne(
      { _id: id, [`seats.row${a}`]: { $elemMatch: { seatNumber: seatNumber } } },
      {
        $set: {
          [`seats.row${a}.$[seat].booking`]: true,
          [`seats.row${a}.$[seat].passenger_name`]: passenger.name,
          [`seats.row${a}.$[seat].age`]: passenger.age,
          [`seats.row${a}.$[seat].gender`]: passenger.sex,
        },
      },
      { arrayFilters: [{ "seat.seatNumber": seatNumber }] }
    );
    return true;
  } else {
    return false;
  }
};

export const aisleSeat = async (passenger, id, a) => {
  const aisleSeat = await busModel.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(id) } },
    {
      $project: {
        [`seats.row${a}`]: {
          $filter: {
            input: `$seats.row${a}`,
            cond: { $and: [{ $eq: ["$$this.seat_type", "Aisle"] }, { $eq: ["$$this.booking", false] }] },
          },
        },
      },
    },
  ]);
  if (aisleSeat[0].seats[`row${a}`]?.length) {
    const seatNumber = aisleSeat[0].seats[`row${a}`][0].seatNumber;
    await busModel.updateOne(
      { _id: id, [`seats.row${a}`]: { $elemMatch: { seatNumber: seatNumber } } },
      {
        $set: {
          [`seats.row${a}.$[seat].booking`]: true,
          [`seats.row${a}.$[seat].passenger_name`]: passenger.name,
          [`seats.row${a}.$[seat].age`]: passenger.age,
          [`seats.row${a}.$[seat].gender`]: passenger.sex,
        },
      },
      { arrayFilters: [{ "seat.seatNumber": seatNumber }] }
    );
    return true;
  } else {
    return false;
  }
};

export const bookSeat = async (passenger, id, a) => {
  const Seat = await busModel.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(id) } },
    {
      $project: {
        [`seats.row${a}`]: {
          $filter: {
            input: `$seats.row${a}`,
            cond: { $eq: ["$$this.booking", false] },
          },
        },
      },
    },
  ]);
  if (Seat[0].seats[`row${a}`]?.length) {
    const seatNumber = Seat[0].seats[`row${a}`][0].seatNumber;
    await busModel.updateOne(
      { _id: id, [`seats.row${a}`]: { $elemMatch: { seatNumber: seatNumber } } },
      {
        $set: {
          [`seats.row${a}.$[seat].booking`]: true,
          [`seats.row${a}.$[seat].passenger_name`]: passenger.name,
          [`seats.row${a}.$[seat].age`]: passenger.age,
          [`seats.row${a}.$[seat].gender`]: passenger.sex,
        },
      },
      { arrayFilters: [{ "seat.seatNumber": seatNumber }] }
    );
    return true;
  } else {
    return false;
  }
};

export const singleSeat = async (passenger, id, a) => {
  const Seat = await busModel.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(id) } },
    {
      $project: {
        [`seats.row${a}`]: {
          $filter: {
            input: `$seats.row${a}`,
            cond: {
              $and: [{ $eq: ["$$this.booking", false] }, { $ne: ["$$this.gender.prev", "Male"] }, { $ne: ["$$this.gender.next", "Male"] }],
            },
          },
        },
      },
    },
  ]);

  console.log(Seat);
};
