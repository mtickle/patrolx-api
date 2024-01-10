import mongoose, { Schema } from 'mongoose';


const arrestsCountsByGenderSchema = new Schema(
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


export const arrestsCountsByGenderModel = mongoose.model("metrics_arrests_count_by_gender", arrestsCountsByGenderSchema, "metrics_arrests_count_by_gender");