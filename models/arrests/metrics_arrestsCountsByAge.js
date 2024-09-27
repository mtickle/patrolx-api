import mongoose, { Schema } from 'mongoose';


const arrestsCountsByAgeSchema = new Schema(
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


export const arrestsCountsByAgeModel = mongoose.model("metrics_arrests_count_by_age", arrestsCountsByAgeSchema, "metrics_arrests_count_by_age");