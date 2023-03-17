//--- Notes
//---- 9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn is a good API Key
//--- http://localhost:3001/api/getAllCalls?limit=1

//--- Models
import { incidentsModel } from "../models/incidents.js";
import { callsModel } from "../models/calls.js";
import { usersModel } from "../models/users.js";
import { arrestsModel } from "../models/arrests.js"
import { crashLocationsModel } from "../models/crashlocations.js";
import { emdCodesModel } from "../models/emdcodes.js";
import { locationsModel } from "../models/locations.js";
import { format } from "morgan";

//--- Helpers
import auth from "../middlewares/auth.js";
import { Router } from "express";
const router = Router();
import randomstring from "randomstring";

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
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllIncidents",  auth.checkKey, async (req, res) => {

  //--- Get the record limit from the querystring
  const recordLimit = req.query.limit || 10
  try {
    const data = await incidentsModel.find().limit(recordLimit).sort({ reportedDate: -1, reportedHour: -1});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getOneIncident/:id", auth.checkKey,async (req, res) => {
  try {
    const data = await findById(req.params.id);
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

router.get("/getOneCall/:id", auth.checkKey,async (req, res) => {
  try {
    const data = await _findById(req.params.id);
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
		locationLongitude : req.body.locationLongitude
});

try {
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


export default router;
