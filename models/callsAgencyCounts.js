import mongoose, { Schema } from 'mongoose';


const callsAgencyCountSchema = new Schema({
    _id: {
      required: false,
      type: String,
    },
    AgencyCount: {
        required: false,
        type: String,
      }
});

export const callsAgencyCountModel = mongoose.model("agencycallcounts", callsAgencyCountSchema);