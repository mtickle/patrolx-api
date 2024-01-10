import mongoose, { Schema } from 'mongoose';


const arrestsCountsByOfficerSchema = new Schema(
  {
    _id: {
      required: false,
      type: String,
    },
    ItemCount: {
        required: false,
        type: String,
      }
}
);


export const arrestsCountsByOfficerModel = mongoose.model("metrics_arrests_count_by_officer", arrestsCountsByOfficerSchema, "metrics_arrests_count_by_officer");