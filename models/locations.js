import mongoose, { Schema } from "mongoose";

const locationsSchema = new Schema({
  address: {
    required: true,
    type: String,
  },
  city: {
    required: true,
    type: String,
  }
});

export const locationsModel = mongoose.model("locations", locationsSchema);
