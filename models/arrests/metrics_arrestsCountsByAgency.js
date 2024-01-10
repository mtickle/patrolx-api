import mongoose, { Schema } from 'mongoose';


const arrestsCountsByAgencySchema = new Schema(
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


export const arrestsCountsByAgencyModel = mongoose.model("metrics_arrests_count_by_agency", arrestsCountsByAgencySchema, "metrics_arrests_count_by_agency");