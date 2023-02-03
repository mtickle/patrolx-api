//--- Notes
//---- 9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn is a good API Key
//--- http://localhost:3001/api/getAllCalls?limit=1

//--- Models
import { incidentsModel } from "../models/incidents.js";
import { callsModel } from "../models/calls.js";
import { usersModel } from "../models/users.js";
import { arrestsModel } from "../models/arrests.js"

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
    const data = await incidentsModel.find().limit(recordLimit).sort({_id:-1});
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
  const data = await callsModel.find().limit(recordLimit).sort({_id:-1});
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
const data = await arrestsModel.find().limit(recordLimit).sort({_id:-1});
res.json(data);
} catch (error) {
res.status(500).json({ message: error.message });
}
});

router.post("/postArrest", auth.checkKey,async (req, res) => {
  const data = new arrestsModel({
  first: req.body.first,
  last: req.body.last,
  height: req.body.height,
  weight: req.body.weight,
  hair: req.body.hair,
  eye: req.body.eye,
  dob: req.body.dob,
  sex: req.body.sex,
  race: req.body.race,
  dateArr: req.body.dateArr,
  charge: req.body.charge
});

try {
  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
} catch (error) {
  res.status(400).json({ message: error.message });
}
});

export default router;
