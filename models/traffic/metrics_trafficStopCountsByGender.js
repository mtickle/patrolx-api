import mongoose, { Schema } from 'mongoose';


const trafficstopsCountsByGenderSchema = new Schema(
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


export const trafficstopsCountsByGenderModel = mongoose.model("metrics_traffic_stops_by_gender", trafficstopsCountsByGenderSchema, "metrics_traffic_stops_by_gender");