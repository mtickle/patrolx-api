import mongoose, { Schema } from 'mongoose';


const incidentCountsByTypeSchema = new Schema(
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


export const incidentCountsByTypeModel = mongoose.model("metrics_incident_counts_by_type", incidentCountsByTypeSchema, "metrics_incident_counts_by_type");