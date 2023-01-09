import mongoose, { Schema } from 'mongoose';


const callsSchema = new Schema({
    agency: {
      required: false,
      type: String,
    },
    latitude: {
        required: false,
        type: String,
      },
      longitude: {
        required: false,
        type: String,
      },
      incidentType: {
        required: false,
        type: String,
      },
      location: {
        required: false,
        type: String,
      },
      callDate: {
        required: false,
        type: String,
      },
      callTime: {
        required: false,
        type: String,
      },
      emdCode: {
        required: false,
        type: String,
      }
});

export const callsModel = mongoose.model("calls", callsSchema);
