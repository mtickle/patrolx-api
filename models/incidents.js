import mongoose, { Schema } from 'mongoose';

const incidentSchema = new Schema({
  caseNumber: {
    required: false,
    type: String,
  },
  reportedHour: {
    required: false,
    type: String,
  },
  longitude: {
    required: false,
    type: String,
  },
  reportedYear: {
    required: false,
    type: String,
  },
  reportedMonth: {
    required: false,
    type: String,
  },
  latitude: {
    required: false,
    type: String,
  },
  crimeCode: {
    required: false,
    type: String,
  },
  incidentID: {
    required: false,
    type: String,
  },
  crimeType: {
    required: false,
    type: String,
  },
  district: {
    required: false,
    type: String,
  },
  reportedDayOfWeek: {
    required: false,
    type: String,
  },
  reportedDate: {
    required: false,
    type: String,
  },
  reportedDay: {
    required: false,
    type: String,
  },
  updatedDate: {
    required: false,
    type: String,
  },
  crimeDescription: {
    required: false,
    type: String,
  },
  cityOfIncident: {
    required: false,
    type: String,
  },
  reportedBlockAddress: {
    required: false,
    type: String,
  },
});

export const incidentsModel = mongoose.model("incidents", incidentSchema);