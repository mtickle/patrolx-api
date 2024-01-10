import mongoose, { Schema } from 'mongoose';


const crashTypeCountSchema = new Schema(
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


export const crashTypeCountModel = mongoose.model("metrics_crash_types", crashTypeCountSchema, "metrics_crash_types");