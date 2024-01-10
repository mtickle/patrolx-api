import mongoose, { Schema } from 'mongoose';


const trafficstopsCountsByDescSchema = new Schema(
  {
    _id: {
      required: false,
      type: String,
    },
    InCount: {
        required: false,
        type: String,
      }
}
);


export const trafficstopsCountsByDescModel = mongoose.model("metrics_traffic_stops_by_description", trafficstopsCountsByDescSchema, "metrics_traffic_stops_by_description");