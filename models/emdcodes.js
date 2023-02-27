import mongoose, { Schema } from 'mongoose';


const emdCodesSchema = new Schema({
    code: {
      required: false,
      type: String,
    },
    description: {
        required: false,
        type: String,
      }
});

export const emdCodesModel = mongoose.model("emdcodes", emdCodesSchema);
