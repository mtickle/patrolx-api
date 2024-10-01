import mongoose, { Schema } from 'mongoose';


const ccbiArrestsSchema = new Schema({

  name: {
    required: false,
    type: String,
  },
  ageAtArrest: {
    required: false,
    type: String,
  },
  gender: {
    required: false,
    type: String,
  },
  residence: {
    required: false,
    type: String,
  },
  residenceLat: {
    required: false,
    type: String,
  },
  residenceLng: {
    required: false,
    type: String,
  },
  employer: {
    required: false,
    type: String,
  },
  dateOfArrest: {
    required: false,
    type: String,
  },
  timeOfArrest: {
    required: false,
    type: String,
  },
  arrestLocation: {
    required: false,
    type: String,
  },
  arrestLat: {
    required: false,
    type: String,
  },
  arrestLng: {
    required: false,
    type: String,
  },
  arrestingOfficer: {
    required: false,
    type: String,
  },
  arrestingAgency: {
    required: false,
    type: String,
  },
  charge: {
    required: false,
    type: String,
  }
});

export const ccbiArrestsModel = mongoose.model("ccbiarrests", ccbiArrestsSchema);
