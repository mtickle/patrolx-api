import mongoose, { Schema } from 'mongoose';


const incidentCountsByDistrictSchema = new Schema(
  {
    _id: {
      required: false,
      type: String,
    },
    IncidentCount: {
        required: false,
        type: String,
      }
}
);


export const incidentCountsByDistrictModel = mongoose.model("metrics_incident_counts_by_district", incidentCountsByDistrictSchema, "metrics_incident_counts_by_district");