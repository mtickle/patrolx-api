import mongoose, { Schema } from 'mongoose';

const arrestsSchema = new Schema({
    first: {
      required: false,
      type: String,
    },
    last: {
        required: false,
        type: String,
      },
      height: {
        required: false,
        type: String,
      },
      weight: {
        required: false,
        type: String,
      },
      hair: {
        required: false,
        type: String,
      },
      eye: {
        required: false,
        type: String,
      },
      dob: {
        required: false,
        type: String,
      },
      sex: {
        required: false,
        type: String,
      },
      race: {
        required: false,
        type: String,
      },
      dateArr: {
        required: false,
        type: String,
      },
      charge: {
        required: false,
        type: String,
      }
});

export const arrestsModel = mongoose.model("arrests", arrestsSchema);
