import mongoose, { Schema } from 'mongoose';


const arrestsCountsByChargeSchema = new Schema(
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


export const arrestsCountsByChargeModel = mongoose.model("metrics_arrests_count_by_charge", arrestsCountsByChargeSchema, "metrics_arrests_count_by_charge");