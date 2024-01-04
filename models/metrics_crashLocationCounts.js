import mongoose, { Schema } from 'mongoose';


const crashLocationCountSchema = new Schema(
  {
    _id: {
      required: false,
      type: String,
    },
    CrashCount: {
        required: false,
        type: String,
      }
}
);


export const crashLocationCountModel = mongoose.model("metrics_crash_locations", crashLocationCountSchema, "metrics_crash_locations");