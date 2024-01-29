import mongoose, { Schema } from "mongoose";

const crashPersonsSchema = new Schema({
    keyCrash: {
        required: false,
        type: String,
    },
    objectid: {
        required: false,
        type: String,
    },
    city: {
        required: false,
        type: String,
    },
    dLClass: {
        required: false,
        type: String,
    },
    dLRestrictions: {
        required: false,
        type: String,
    },
    dLState: {
        required: false,
        type: String,
    },
    cdl: {
        required: false,
        type: String,
    },
    age: {
        required: false,
        type: String,
    },
    vehicleSeizure: {
        required: false,
        type: String,
    },
    alcoholSuspected: {
        required: false,
        type: String,
    },
    alcoholTest: {
        required: false,
        type: String,
    },
    alcoholResultType: {
        required: false,
        type: String,
    },
    airbagSwitch: {
        required: false,
        type: String,
    },
    AirbagDeployed: {
        required: false,
        type: String,
    },
    ejection: {
        required: false,
        type: String,
    },
    gender: {
        required: false,
        type: String,
    },
    race: {
        required: false,
        type: String,
    },
    injury: {
        required: false,
        type: String,
    },
    protection: {
        required: false,
        type: String,
    },
    trapped: {
        required: false,
        type: String,
    },
    personType: {
        required: false,
        type: String,
    },
    visionObstruction: {
        required: false,
        type: String,
    },
    contributingCircumstance1: {
        required: false,
        type: String,
    },
    contributingCircumstance2: {
        required: false,
        type: String,
    },
    contributingCircumstance3: {
        required: false,
        type: String,
    },
    vehicleType: {
        required: false,
        type: String,
    },
    crashDate: {
        required: false,
        type: String,
    }

});

export const crashPersonsModel = mongoose.model(
    "crashpersons",
    crashPersonsSchema
);