import mongoose, { Schema } from 'mongoose';


const trafficstopsCountsByMakeSchema = new Schema(
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


export const trafficstopsCountsByMakeModel = mongoose.model("metrics_traffic_stops_by_make", trafficstopsCountsByMakeSchema, "metrics_traffic_stops_by_make");