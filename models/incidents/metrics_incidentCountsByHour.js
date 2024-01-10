import mongoose, { Schema } from 'mongoose';


const incidentCountsByHourSchema = new Schema(
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


export const incidentCountsByHourModel = mongoose.model("metrics_incident_counts_by_hour", incidentCountsByHourSchema, "metrics_incident_counts_by_hour");