import mongoose, { Schema } from 'mongoose';


const trafficstopsCountsByRaceSchema = new Schema(
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


export const trafficstopsCountsByRaceModel = mongoose.model("metrics_traffic_stops_by_race", trafficstopsCountsByRaceSchema, "metrics_traffic_stops_by_race");