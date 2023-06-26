import mongoose, { Schema } from "mongoose";

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const crashLocationsSchema = new Schema({
  key_crash: {
    required: false,
    type: String,
  },
  dateOfCrash: {
    required: false,
    type: String,
  },
  timeOfCrash: {
    required: false,
    type: String,
  },
  localUse: {
    required: false,
    type: String,
  },
  locationRelationToRoad: {
    required: false,
    type: String,
  },
  locationInnearIndicator: {
    required: false,
    type: String,
  },
  locationCity: {
    required: false,
    type: String,
  },
  locationRoadName: {
    required: false,
    type: String,
  },
  locationRampIndicator: {
    required: false,
    type: String,
  },
  locationFeetFromRoad: {
    required: false,
    type: String,
  },
  locationMilesFromRoad: {
    required: false,
    type: String,
  },
  locationDirectionFromRoad: {
    required: false,
    type: String,
  },
  locationatFromIndicator: {
    required: false,
    type: String,
  },
  locationRoadNameAt: {
    required: false,
    type: String,
  },
  locationDirectionToRoad: {
    required: false,
    type: String,
  },
  locationRadNameTo: {
    required: false,
    type: String,
  },
  firstHarmfulEvent: {
    required: false,
    type: String,
  },
  mostHarmfulEvent: {
    required: false,
    type: String,
  },
  roadClassification: {
    required: false,
    type: String,
  },
  roadFeature: {
    required: false,
    type: String,
  },
  trafficControlType: {
    required: false,
    type: String,
  },
  weatherCondition1: {
    required: false,
    type: String,
  },
  weatherCondition2: {
    required: false,
    type: String,
  },
  weatherContributedToCrash: {
    required: false,
    type: String,
  },
  updateDate: {
    required: false,
    type: String,
  },
  crashDateDay: {
    required: false,
    type: String,
  },
  crashDateDow: {
    required: false,
    type: String,
  },
  crashDateDowNum: {
    required: false,
    type: String,
  },
  crashDateHour: {
    required: false,
    type: String,
  },
  crashDateMonth: {
    required: false,
    type: String,
  },
  crashDateMonthNum: {
    required: false,
    type: String,
  },
  crashDateYear: {
    required: false,
    type: String,
  },
  drivers: {
    required: false,
    type: String,
  },
  passengers: {
    required: false,
    type: String,
  },
  pedestrians: {
    required: false,
    type: String,
  },
  pedalCyclists: {
    required: false,
    type: String,
  },
  otherPersonType: {
    required: false,
    type: String,
  },
  unknownPersonType: {
    required: false,
    type: String,
  },
  killed: {
    required: false,
    type: String,
  },
  typeAInjury: {
    required: false,
    type: String,
  },
  typeBInjury: {
    required: false,
    type: String,
  },
  typeCInjury: {
    required: false,
    type: String,
  },
  noInjury: {
    required: false,
    type: String,
  },
  injuryUnknown: {
    required: false,
    type: String,
  },
  locationLatitude: {
    required: false,
    type: String,
  },
  locationLongitude: {
    required: false,
    type: String,
  },
  location: {
    required: false,
    type: String,
  }

});

export const crashLocationsModel = mongoose.model(
  "crashlocations",
  crashLocationsSchema
);
