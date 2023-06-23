import mongoose, { Schema } from "mongoose";

const trafficSchema = new Schema({
  
  belts: {
    required: false,
    type: String,
  },
location: {
    required: false,
    type: String,
  },
race: {
    required: false,
    type: String,
  },
arrestType: {
    required: false,
    type: String,
  },
charge: {
    required: false,
    type: String,
  },
subagency: {
    required: false,
    type: String,
  },
dateOfStop: {
    required: false,
    type: String,
  },
color: {
    required: false,
    type: String,
  },
vehicleType: {
    required: false,
    type: String,
  },
accident: {
    required: false,
    type: String,
  },
state: {
    required: false,
    type: String,
  },
violationType: {
    required: false,
    type: String,
  },
latitude: {
    required: false,
    type: String,
  },
driverState: {
    required: false,
    type: String,
  },
model: {
    required: false,
    type: String,
  },
personalInjury: {
    required: false,
    type: String,
  },
article: {
    required: false,
    type: String,
  },
description: {
    required: false,
    type: String,
  },
hazmat: {
    required: false,
    type: String,
  },
fatal: {
    required: false,
    type: String,
  },
year: {
    required: false,
    type: String,
  },
propertyDamage: {
    required: false,
    type: String,
  },
agency: {
    required: false,
    type: String,
  },
gender: {
    required: false,
    type: String,
  },
driverCity: {
    required: false,
    type: String,
  },
longitude: {
    required: false,
    type: String,
  },
alcohol: {
    required: false,
    type: String,
  },
timeOfStop: {
    required: false,
    type: String,
  },
commercialVehicle: {
    required: false,
    type: String,
  },
make: {
    required: false,
    type: String,
  },
workZone: {
    required: false,
    type: String,
  },
dlState: {
    required: false,
    type: String,
  },
contributedToAccident: {
    required: false,
    type: String,
  },
commercialLicense: {
    required: false,
    type: String,
  }
  
  
});

export const trafficModel = mongoose.model("traffic", trafficSchema);
