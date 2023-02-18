import agentModel from "../models/agentModel.js";
import busModel from "../models/busModel.js";

export const getBusList = async (req, res) => {
  try {
    const buses = await busModel.find();
    res.status(200).json({ buses: buses });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "Internal server error" });
  }
};
