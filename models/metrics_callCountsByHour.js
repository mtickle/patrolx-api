import mongoose, { Schema } from 'mongoose';

const callCountsByHourSchema = new Schema(
  {
    _id: {
      required: false,
      type: String,
    },
    HourCount: {
        required: false,
        type: String,
      }
}
);

export const callCountsByHourModel = mongoose.model("metrics_call_counts_by_Hour", callCountsByHourSchema, "metrics_call_counts_by_hour");