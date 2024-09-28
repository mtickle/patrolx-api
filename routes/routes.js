//--- Notes
//---- 9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn is a good API Key
//--- http://localhost:3001/api/getAllCalls?limit=1

//--- Models
import { incidentsModel } from "../models/incidents.js";
import { callsModel } from "../models/calls.js";
import { usersModel } from "../models/users.js";
import { arrestsModel } from "../models/arrests.js"
import { crashLocationsModel } from "../models/crashlocations.js";
import { crashPersonsModel } from "../models/crashpersons.js";
import { emdCodesModel } from "../models/emdcodes.js";
import { locationsModel } from "../models/locations.js";
import { ccbiArrestsModel } from "../models/ccbiArrests.js";
import { trafficModel } from "../models/traffic.js";
import { vehicleMakesModel } from "../models/vehiclemakes.js";

import { callCountsByAgencyModel } from "../models/calls/metrics_callCountsByAgency.js";
import { callCountsByIncidentModel } from "../models/calls/metrics_callCountsByIncident.js";
import { callCountsByEmdCodeModel } from "../models/calls/metrics_callCountsByEmdCode.js";
import { callCountsByHourModel } from "../models/calls/metrics_callCountsByHour.js";

import { incidentCountsByDistrictModel } from "../models/incidents/metrics_incidentCountsByDistrict.js";
import { incidentCountsByTypeModel } from "../models/incidents/metrics_incidentCountsByType.js";
import { incidentCountsByHourModel } from "../models/incidents/metrics_incidentCountsByHour.js";
import { incidentCountsByDayOfWeekModel } from "../models/incidents/metrics_incidentCountsByDayOfWeek.js";

import { crashTypeCountModel } from "../models/crashlocations/metrics_crashTypeCounts.js";
import { crashLocationCountModel } from "../models/crashlocations/metrics_crashLocationCounts.js"

import { arrestsCountsByAgencyModel } from "../models/arrests/metrics_arrestsCountsByAgency.js";
import { arrestsCountsByChargeModel } from "../models/arrests/metrics_arrestsCountsByCharge.js";
import { arrestsCountsByGenderModel } from "../models/arrests/metrics_arrestsCountsByGender.js";
import { arrestsCountsByOfficerModel } from "../models/arrests/metrics_arrestsCountsByOfficer.js";
import { arrestsCountsByAgeModel } from "../models/arrests/metrics_arrestsCountsByAge.js";

import { trafficstopsCountsByDescModel } from "../models/traffic/metrics_trafficStopCountsByDescription.js";
import { trafficstopsCountsByGenderModel } from "../models/traffic/metrics_trafficStopCountsByGender.js";
import { trafficstopsCountsByRaceModel } from "../models/traffic/metrics_trafficStopCountsByRace.js";
import { trafficstopsCountsByMakeModel } from "../models/traffic/metrics_trafficStopCountsByMake.js";

//--- Helpers
import auth from "../middlewares/auth.js";
import { Router } from "express";
const router = Router();
import randomstring from "randomstring";

console.log(router)

//--- -------------------------------------------------------
//--- METRICS
//--- -------------------------------------------------------

router.get("/getIncidentCountsByDayOfWeek", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 7;

  try {
    const data = await incidentCountsByDayOfWeekModel
      .find()
      .limit(recordLimit)
      .sort({ _id: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getIncidentCountsByHour", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 24;

  try {
    const data = await incidentCountsByHourModel
      .find()
      .limit(recordLimit)
      .sort({ _id: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getIncidentCountsByDistrict", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await incidentCountsByDistrictModel
      .find()
      .limit(recordLimit)
      .sort({ IncidentCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getIncidentCountsByType", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await incidentCountsByTypeModel
      .find()
      .limit(recordLimit)
      .sort({ IncidentCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getCallCountsByHour", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 24;

  try {
    const data = await callCountsByHourModel
      .find()
      .limit(recordLimit)
      .sort({ _id: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getCallCountsByAgency", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await callCountsByAgencyModel
      .find()
      .limit(recordLimit)
      .sort({ AgencyCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getCallCountsByIncident", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await callCountsByIncidentModel
      .find()
      .limit(recordLimit)
      .sort({ IncidentCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getCallCountsByEmdCode", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await callCountsByEmdCodeModel
      .find()
      .limit(recordLimit)
      .sort({ EmdCodeCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getCrashTypeCounts", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await crashTypeCountModel
      .find()
      .limit(recordLimit)
      .sort({ CrashCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getCrashLocationCounts", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await crashLocationCountModel
      .find()
      .limit(recordLimit)
      .sort({ CrashCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getArrestChargeCounts", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await arrestsCountsByChargeModel
      .find()
      .limit(recordLimit)
      .sort({ ItemCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getArrestAgeCounts", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await arrestsCountsByAgeModel
      .find()
      .limit(recordLimit)
      .sort({ _id: 1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getArrestAgencyCounts", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await arrestsCountsByAgencyModel
      .find()
      .limit(recordLimit)
      .sort({ ItemCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getArrestGenderCounts", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await arrestsCountsByGenderModel
      .find()
      .limit(recordLimit)
      .sort({ ItemCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getArrestOfficerCounts", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await arrestsCountsByOfficerModel
      .find()
      .limit(recordLimit)
      .sort({ ItemCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get("/getTrafficStopDescriptionCounts", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await trafficstopsCountsByDescModel
      .find()
      .limit(recordLimit)
      .sort({ ItemCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getTrafficStopMakeCounts", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await trafficstopsCountsByMakeModel
      .find()
      .limit(recordLimit)
      .sort({ ItemCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getTrafficStopRaceCounts", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await trafficstopsCountsByRaceModel
      .find()
      .limit(recordLimit)
      .sort({ ItemCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getTrafficStopGenderCounts", auth.checkKey, async (req, res) => {
  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10;

  try {
    const data = await trafficstopsCountsByGenderModel
      .find()
      .limit(recordLimit)
      .sort({ ItemCount: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//--- -------------------------------------------------------
//--- END METRICS
//--- -------------------------------------------------------

router.post("/postVehicleMake", async (req, res) => {
  const data = new vehicleMakesModel({
    makeId: req.body.makeId,
    makeName:req.body.makeName,
    modelId: req.body.modelId,
    modelName:req.body.modelName,
    vehicleTypeID:req.body.vehicleTypeID,
    vehicleTypeName:req.body.vehicleTypeName
});

try {
  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
} catch (error) {
  res.status(400).json({ message: error.message });
}
});

router.post("/postUser", async (req, res) => {
  const data = new usersModel({
  username: req.body.username,
  apiKey: randomstring.generate(),
});

try {
  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
} catch (error) {
  res.status(400).json({ message: error.message });
}
});

router.get("/getAllEmdCodes", auth.checkKey, async (req, res) => {

  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 100

  try {
    const data = await emdCodesModel.find().limit(recordLimit);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getAllUsers", auth.checkKey, async (req, res) => {

  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10

  try {
    const data = await usersModel.find().limit(recordLimit);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/postIncident", auth.checkKey, async (req, res) => {

    const data = new incidentsModel({
    caseNumber: req.body.caseNumber,
    reportedHour: req.body.reportedHour,
    longitude: req.body.longitude,
    reportedYear: req.body.reportedYear,
    reportedMonth: req.body.reportedMonth,
    latitude: req.body.latitude,
    crimeCode: req.body.crimeCode,
    incidentID: req.body.incidentID,
    crimeType: req.body.crimeCode,
    district: req.body.district,
    reportedDayOfWeek: req.body.reportedDayOfWeek,
    reportedDate: req.body.reportedDate,
    reportedTime: req.body.reportedTime,
    reportedDay: req.body.reportedDay,
    updatedDate: req.body.updatedDate,
    crimeDescription: req.body.crimeDescription,
    cityOfIncident: req.body.cityOfIncident,
    reportedBlockAddress: req.body.reportedBlockAddress,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllIncidents",  auth.checkKey, async (req, res) => {

  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10
  console.log("hi")
  try {
    const data = await incidentsModel.find().limit(recordLimit).sort({ reportedDate: -1, reportedHour: -1});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getIncident/:_id", auth.checkKey,async (req, res) => {
  try {
    const data = await incidentsModel.findById(req.params._id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  });

router.patch("/updateIncident/:id", auth.checkKey,async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteIncident/:id", auth.checkKey,async (req, res) => {
  try {
    const id = req.params.id;
    const data = await findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/postCall", auth.checkKey,async (req, res) => {
  const data = new callsModel({
  agency: req.body.agency,
  latitude: req.body.latitude,
  longitude: req.body.longitude,
  incidentType: req.body.incidentType,
  location: req.body.location,
  callDate: req.body.callDate,
  callTime: req.body.callTime,
  emdCode: req.body.emdCode
});

try {
  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
} catch (error) {
  res.status(400).json({ message: error.message });
}
});

router.get("/getAllCalls", auth.checkKey,async (req, res) => {

    //--- Get the record limit from the querystring
    const recordLimit = req.query.limit || 10

  try {
  const data = await callsModel.find().limit(recordLimit).sort({callDate: -1, callTime: -1});
  res.json(data);
} catch (error) {
  res.status(500).json({ message: error.message });
}
});

// router.get("/getOneCall/:call", auth.checkKey,async (req, res) => {
//   console.log("hi")
//   try {
//     const data = await _findById(req.params.call);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get("/getCall/:_id", auth.checkKey,async (req, res) => {
try {
  const data = await callsModel.findById(req.params._id);
  res.json(data);
} catch (error) {
  res.status(500).json({ message: error.message });
}
});

router.patch("/updateCall/:id", auth.checkKey,async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await _findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteCall/:id", auth.checkKey,async (req, res) => {
  try {
    const id = req.params.id;
    const data = await _findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllArrests", auth.checkKey,async (req, res) => {

  const recordLimit = req.query.limit || 10

try {
const data = await arrestsModel.find().limit(recordLimit).sort({dateArr: -1, timeArr: -1});
res.json(data);
} catch (error) {
res.status(500).json({ message: error.message });
}
});

router.post("/postArrest", auth.checkKey,async (req, res) => {
  const data = new arrestsModel({
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  height: req.body.height,
  weight: req.body.weight,
  hair: req.body.hair,
  eye: req.body.eye,
  dob: req.body.dob,
  sex: req.body.sex,
  race: req.body.race,
  dateArr: req.body.dateArr,
  timeArr: req.body.timeArr,
  charge: req.body.charge
});

try {
  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
} catch (error) {
  res.status(400).json({ message: error.message });
}
});

router.get("/getArrest/:_id", auth.checkKey,async (req, res) => {
  try {
    const data = await ccbiArrestsModel.findById(req.params._id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  });

router.get("/getAllCcbiArrests", auth.checkKey,async (req, res) => {

  const recordLimit = req.query.limit || 10

try {
//const data = await ccbiArrestsModel.find().limit(recordLimit).sort({dateOfArrest: 1, timeOfArrest: -1});
const data = await ccbiArrestsModel.find().limit(recordLimit).sort({dateOfArrest: -1, timeOfArrest: -1});
res.json(data);
console.log(data)
} catch (error) {
res.status(500).json({ message: error.message });
}
});

router.post("/postCcbiArrest", auth.checkKey,async (req, res) => {
  const data = new ccbiArrestsModel({
  name: req.body.name,
  ageAtArrest: req.body.ageAtArrest,
  gender: req.body.gender,
  residence: req.body.residence,
  employer: req.body.employer,
  dateOfArrest: req.body.dateOfArrest,
  timeOfArrest: req.body.timeOfArrest,
  arrestLocation: req.body.arrestLocation,
  arrestingOfficer: req.body.arrestingOfficer,
  arrestingAgency: req.body.arrestingAgency,
  charge: req.body.charge
});

try {
  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
} catch (error) {
console.log(error)
  res.status(400).json({ message: error.message });
}
});

router.post("/postCrashLocation", auth.checkKey,async (req, res) => {

  const data = new crashLocationsModel({

    key_crash : req.body.key_crash,
		dateOfCrash : req.body.dateOfCrash,
    timeOfCrash : req.body.timeOfCrash,
		localUse : req.body.localUse,
		locationRelationToRoad : req.body.locationRelationToRoad,
		locationInnearIndicator : req.body.locationInnearIndicator,
		locationCity : req.body.locationCity,
		locationRoadName : req.body.locationRoadName,
		locationRampIndicator : req.body.locationRampIndicator,
		locationFeetFromRoad : req.body.locationFeetFromRoad,
		locationMilesFromRoad : req.body.locationMilesFromRoad,
		locationDirectionFromRoad : req.body.locationDirectionFromRoad,
		locationatFromIndicator : req.body.locationatFromIndicator,
		locationRoadNameAt : req.body.locationRoadNameAt,
		locationDirectionToRoad : req.body.locationDirectionToRoad,
		locationRadNameTo : req.body.locationRadNameTo,
		firstHarmfulEvent : req.body.firstHarmfulEvent,
		mostHarmfulEvent : req.body.mostHarmfulEvent,
		roadClassification : req.body.roadClassification,
		roadFeature : req.body.roadFeature,
		trafficControlType : req.body.trafficControlType,
		weatherCondition1 : req.body.weatherCondition1,
		weatherCondition2 : req.body.weatherCondition2,
		weatherContributedToCrash : req.body.weatherContributedToCrash,
		updateDate : req.body.updateDate,
		crashDateDay : req.body.crashDateDay,
		crashDateDow : req.body.crashDateDow,
		crashDateDowNum : req.body.crashDateDowNum,
		crashDateHour : req.body.crashDateHour,
		crashDateMonth : req.body.crashDateMonth,
		crashDateMonthNum : req.body.crashDateMonthNum,
		crashDateYear : req.body.crashDateYear,
		drivers : req.body.drivers,
		passengers : req.body.passengers,
		pedestrians : req.body.pedestrians,
		pedalCyclists : req.body.pedalCyclists,
		otherPersonType : req.body.otherPersonType,
		unknownPersonType : req.body.unknownPersonType,
		killed : req.body.killed,
		typeAInjury : req.body.typeAInjury,
		typeBInjury : req.body.typeBInjury,
		typeCInjury : req.body.typeCInjury,
		noInjury : req.body.noInjury,
		injuryUnknown : req.body.injuryUnknown,
		locationLatitude : req.body.locationLatitude,
		locationLongitude : req.body.locationLongitude,
    location: req.body.location
});

try {
  console.log(data)
  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
} catch (error) {
  res.status(400).json({ message: error.message });
}
});

router.get("/getAllCrashLocations", auth.checkKey,async (req, res) => {

  const recordLimit = req.query.limit || 10

try {
const data = await crashLocationsModel.find().limit(recordLimit).sort({dateOfCrash: -1, timeOfCrash: -1});
res.json(data);
} catch (error) {
res.status(500).json({ message: error.message });
}
});

router.post("/postCrashPerson", auth.checkKey,async (req, res) => {

  const data = new crashPersonsModel({

  keyCrash: req.body.KeyCrash,
  objectid: req.body.Objectid,
  city: req.body.City,
  dLClass: req.body.DLClass,
  dLRestrictions: req.body.DLRestrictions,
  dLState: req.body.DLState,
  cdl: req.body.Cdl,
  age: req.body.Age,
  vehicleSeizure: req.body.VehicleSeizure,
  alcoholSuspected: req.body.AlcoholSuspected,
  alcoholTest: req.body.AlcoholTest,
  alcoholResultType: req.body.AlcoholResultType,
  airbagSwitch: req.body.AirbagSwitch,
  airbagDeployed: req.body.AirbagDeployed,
  ejection: req.body.Ejection,
  gender: req.body.Gender,
  race: req.body.Race,
  injury: req.body.Injury,
  protection: req.body.Protection,
  trapped: req.body.Trapped,
  personType: req.body.PersonType,
  visionObstruction: req.body.VisionObstruction,
  contributingCircumstance1: req.body.ContributingCircumstance1,
  contributingCircumstance2: req.body.ContributingCircumstance2,
  contributingCircumstance3: req.body.ContributingCircumstance3,
  vehicleType: req.body.VehicleType,
  crashDate: req.body.CrashDate,
  dateOfCrash: req.body.dateOfCrash,
  timeOfCrash: req.body.timeOfCrash
});

try {
  console.log(data)
  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
} catch (error) {
  res.status(400).json({ message: error.message });
}
});

router.post("/postLocation", auth.checkKey, async (req, res) => {

  const data = new locationsModel({
  address: req.body.address,
  city: req.body.city,
});

try {
  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
} catch (error) {
  res.status(400).json({ message: error.message });
}
});

router.get("/getAllLocations",  auth.checkKey, async (req, res) => {

//--- Get the record limit from the querystring
const recordLimit = req.query.limit || 10
try {
  const data = await locationsModel.find().limit(recordLimit).sort({_id: -1});
  res.json(data);
} catch (error) {
  res.status(500).json({ message: error.message });
}
});

router.get("/getOneLocation/:id", auth.checkKey,async (req, res) => {
  console.log("ok")
try {
  const data = await locationsModel.findById(req.params.id);
  res.json(data);
} catch (error) {
  res.status(500).json({ message: error.message });
}
});

router.patch("/updateLocation/:id", auth.checkKey,async (req, res) => {  
try {
  const id = req.params.id;
  const updatedData = req.body;
  const options = { new: true };

  const result = await locationsModel.findByIdAndUpdate(id, updatedData, options);

  res.send(result);
} catch (error) {
  res.status(500).json({ message: error.message });
}
});

router.delete("/deleteLocation/:id", auth.checkKey,async (req, res) => {
try {
  const id = req.params.id;
  const data = await locationsModel.findByIdAndDelete(id);
  res.send(`Document with ${req.params.id} has been deleted..`);
} catch (error) {
  res.status(400).json({ message: error.message });
}
});

router.post("/postTraffic", auth.checkKey, async (req, res) => {

  const data = new trafficModel({
    belts: req.body.belts,
    location: req.body.location,
    race: req.body.race,
    arrestType: req.body.arrestType,
    charge: req.body.charge,
    subagency: req.body.subagency,
    dateOfStop: req.body.dateOfStop,
    color: req.body.color,
    vehicleType: req.body.vehicleType,
    accident: req.body.accident,
    state: req.body.state,
    violationType: req.body.violationType,
    latitude: req.body.latitude,
    driverState: req.body.driverState,
    model: req.body.model,
    personalInjury: req.body.personalInjury,
    article: req.body.article,
    description: req.body.description,
    hazmat: req.body.hazmat,
    fatal: req.body.fatal,
    year: req.body.year,
    propertyDamage: req.body.propertyDamage,
    agency: req.body.agency,
    gender: req.body.gender,
    driverCity: req.body.driverCity,
    longitude: req.body.longitude,
    alcohol: req.body.alcohol,
    timeOfStop: req.body.timeOfStop,
    commercialVehicle: req.body.commercialVehicle,
    make: req.body.make,
    workZone: req.body.workZone,
    dlState: req.body.dlState,
    contributedToAccident: req.body.contributedToAccident,
    commercialLicense: req.body.commercialLicense,
});

try {
  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
} catch (error) {
  console.log(error)
  res.status(400).json({ message: error.message });
}
});

router.get("/getAllTraffic",  auth.checkKey, async (req, res) => {

  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10
  try {
    const data = await trafficModel.find().limit(recordLimit).sort({dateOfStop: -1});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  });

export default router;
