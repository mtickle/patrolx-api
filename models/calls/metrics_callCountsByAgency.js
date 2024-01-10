import mongoose, { Schema } from 'mongoose';


const callCountsByAgencySchema = new Schema(
  {
    _id: {
      required: false,
      type: String,
    },
    AgencyCount: {
        required: false,
        type: String,
      }
}
);


export const callCountsByAgencyModel = mongoose.model("metrics_call_counts_by_agency", callCountsByAgencySchema, "metrics_call_counts_by_agency");