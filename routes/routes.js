import { Router } from "express";
import { incidentsModel } from "../models/incidents.js";
import { callsModel } from "../models/calls.js";
const router = Router();



//---------------------------------------------------------------------
//--- INCIDENT ROUTING
//---------------------------------------------------------------------

//--- POST method, interpreting JSON
router.post("/postIncident", async (req, res) => {

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

//--- GETALL Method
router.get("/getAllIncidents", async (req, res) => {

  try {
    const data = await incidentsModel.find().limit(20);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//--- GETBYID Method
router.get("/getOneIncident/:id", async (req, res) => {
  try {
    const data = await findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//--- UPDATE by ID Method
router.patch("/updateIncident/:id", async (req, res) => {
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

//--- DELETE by ID Method
router.delete("/deleteIncident/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



//---------------------------------------------------------------------
//--- CALL ROUTING
//---------------------------------------------------------------------


router.post("/postCall", async (req, res) => {
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


//--- GETALL Method
router.get("/getAllCalls", async (req, res) => {
  try {
  const data = await callsModel.find().limit(20);
  res.json(data);
} catch (error) {
  res.status(500).json({ message: error.message });
}
});

//--- GETBYID Method
router.get("/getOneCall/:id", async (req, res) => {
  try {
    const data = await _findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//--- UPDATE by ID Method
router.patch("/updateCall/:id", async (req, res) => {
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

//--- DELETE by ID Method
router.delete("/deleteCall/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await _findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
