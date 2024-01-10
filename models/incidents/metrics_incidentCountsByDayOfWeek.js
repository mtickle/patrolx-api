import mongoose, { Schema } from 'mongoose';


const incidentCountsByDayOfWeekSchema = new Schema(
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


export const incidentCountsByDayOfWeekModel = mongoose.model("metrics_incident_counts_by_dayofweek", incidentCountsByDayOfWeekSchema, "metrics_incident_counts_by_dayofweek");