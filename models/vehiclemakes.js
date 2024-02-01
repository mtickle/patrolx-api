import mongoose, { Schema } from "mongoose";

const vehicleMakesSchema = new Schema({
  makeId: {
    required: true,
    type: String,
  },
  makeName: {
    required: true,
    type: String,
  },
  modelId: {
    required: true,
    type: String,
  },
  modelName: {
    required: true,
    type: String,
  },
  vehicleTypeID: {
    required: true,
    type: String,
  },
  vehicleTypeName: {
    required: true,
    type: String,
  }
});

export const vehicleMakesModel = mongoose.model("vehiclemakes", vehicleMakesSchema);
