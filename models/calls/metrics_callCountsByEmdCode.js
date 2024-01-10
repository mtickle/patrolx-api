import mongoose, { Schema } from 'mongoose';

const callCountsByEmdCodeSchema = new Schema(
  {
    _id: {
      required: false,
      type: String,
    },
    EmdCodeCount: {
        required: false,
        type: String,
      }
}
);

export const callCountsByEmdCodeModel = mongoose.model("metrics_call_counts_by_emdcode", callCountsByEmdCodeSchema, "metrics_call_counts_by_emdcode");