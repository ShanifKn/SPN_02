import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  start_location: {
    type: String,
    required: true,
  },
  drop_location: {
    type: String,
    required: true,
  },
  seats: {
    type: Array,
  },
});

const busModel = mongoose.model("Bus", busSchema);
export default busModel;
