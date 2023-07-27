import mongoose, { Schema } from 'mongoose';


const callCountsByIncidentSchema = new Schema(
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


export const callCountsByIncidentModel = mongoose.model("metrics_call_counts_by_incident", callCountsByIncidentSchema, "metrics_call_counts_by_incident");