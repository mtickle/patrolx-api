const mongoose = require("mongoose");
collectionName = "calls"


//Agency, Latitude, Longitude, Incident, Location, CallDate, CallTime, EmdCode

//--- The DATASCHEMA. Thanks to MONGO, this can change.
const callsSchema = new mongoose.Schema({
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

module.exports = mongoose.model(collectionName, callsSchema);