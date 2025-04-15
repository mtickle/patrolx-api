//--- Notes
//---- 9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn is a good API Key
//--- http://localhost:3001/api/getAllCalls?limit=1

//--- Models
//import { incidentsModel } from "../models/incidents.js";

//--- Helpers
import dotenv from 'dotenv'
import auth from "../middlewares/auth.js";
import { query, Router } from "express";
const router = Router();
import pg from 'pg';
import fs from 'fs';
import randomstring from "randomstring";

//--- PostgreSQL configuration
dotenv.config()

const pool = new pg.Pool({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("ca.pem").toString(),
      },
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

//--- WEATHER
router.post("/postWeather", async (req, res) => {
    const temperature = req.body.temperature;
    const feelsLike = req.body.feelsLike;
    const tempMin = req.body.tempMin;
    const tempMax = req.body.tempMax;
    const pressure = req.body.pressure;
    const humidity = req.body.humidity;
    const visibility = req.body.visibility;
    const windSpeed = req.body.windSpeed;
    const windDeg = req.body.windDeg;
    const cloudsAll = req.body.cloudsAll;
    const sunrise = req.body.sunrise;
    const sunset = req.body.sunset;
    const skies = req.body.skies;
    const description = req.body.description;
    const dt = req.body.dt

    const query = `CALL public.addweather(${temperature}::bigint,${feelsLike}::bigint,${tempMin}::bigint,${tempMax}::bigint,${pressure}::bigint,${humidity}::bigint,${visibility}::bigint,${windSpeed}::bigint,${windDeg}::bigint,${cloudsAll}::bigint,${sunrise}::bigint,${sunset}::bigint,'${skies}','${description}',${dt}::bigint);`

    try {
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

router.get('/getAllWeather', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('SELECT * FROM getweather($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getCurrentWeather', async (req, res) => {

    const recordLimit = req.query.limit || 1

    try {
        const result = await pool.query('SELECT temperature, feels_like, humidity, description, wind_speed, wind_deg from public.getweather($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getWeatherByHour', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('SELECT * FROM getweatherbyhour($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//--- INCIDENTS
router.post("/postIncident", async (req, res) => {

    const casenumber = req.body.caseNumber;
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;
    const crimecode = req.body.crimeCode;
    //const incidentid = req.body.incidentID;
    //const crimetype = req.body.crimeCode;
    const district = req.body.district;
    const reporteddate = req.body.reportedDate;
    const reportedtime = req.body.reportedTime;
    const crimedescription = req.body.crimeDescription;
    const cityofincident = req.body.cityOfIncident;
    const reportedblockaddress = req.body.reportedBlockAddress;

    const query = `CALL public.add_incident('${casenumber}','${longitude}','${latitude}','${crimecode}','${district}','${reporteddate}','${reportedtime}','${crimedescription}','${cityofincident}','${reportedblockaddress}');`;

    try {
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/getAllIncidents', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('SELECT * FROM get_incidents($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getIncidentCountsByType', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from get_incidents_by_type($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getIncidentCountsByHour', async (req, res) => {

    const recordLimit = req.query.limit || 10
    const offset = req.query.offset || 0;

    try {
        const result = await pool.query('select * from get_incidents_by_hour($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getIncidentCountsByDistrict', async (req, res) => {

    const recordLimit = req.query.limit || 6
    const offset = req.query.offset || 0;

    try {
        const result = await pool.query('select * from get_incidents_by_district($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getIncidentCountsByDayOfWeek', async (req, res) => {

    const recordLimit = req.query.limit || 10
    const offset = req.query.offset || 0;

    try {
        const result = await pool.query('select * from get_incidents_by_day($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//--- CRASHES
router.post("/postCrash", async (req, res) => {

    const crash_key_crash = req.body.crash_key_crash
    const crash_date = req.body.crash_date
    const crash_time = req.body.crash_time
    const crash_locationRelationToRoad = req.body.crash_locationRelationToRoad
    const crash_locationInNearIndicator = req.body.crash_locationInNearIndicator
    const crash_locationCity = req.body.crash_locationCity
    const crash_locationRoadName = req.body.crash_locationRoadName
    const crash_locationRampIndicator = req.body.crash_locationRampdicator
    const crash_locationMilesFromRoad = req.body.crash_locationMilesFromRoad
    const crash_locationFeetFromRoad = req.body.crash_locationFeetFromRoad
    const crash_locationDirectionFromRoad = req.body.crash_locationDirectionFromRoad
    const crash_locationAtFromIndicator = req.body.crash_locationAtFromdicator
    const crash_locationRoadNameAt = req.body.crash_locationRoadNameAt
    const crash_locationDirectionToRoad = req.body.crash_locationDirectionToRoad
    const crash_locationRoadNameTo = req.body.crash_locationRoadNameTo
    const crash_firstHarmfulEvent = req.body.crash_firstHarmfulEvent
    const crash_mostHarmfulEvent = req.body.crash_mostHarmfulEvent
    const crash_roadClassification = req.body.crash_roadClassification
    const crash_roadFeature = req.body.crash_roadFeature
    const crash_trafficControlType = req.body.crash_trafficControlType
    const crash_weatherCondition1 = req.body.crash_weatherCondition1
    const crash_weatherCondition2 = req.body.crash_weatherCondition2
    const crash_weatherContributedToCrash = req.body.crash_weatherContributedToCrash
    const crash_drivers = req.body.crash_drivers
    const crash_passengers = req.body.crash_passengers
    const crash_pedestrians = req.body.crash_pedestrians
    const crash_pedalCyclists = req.body.crash_pedalCyclists
    const crash_otherPersonType = req.body.crash_otherPersonType
    const crash_unknownPersonType = req.body.crash_unknownPersonType
    const crash_killed = req.body.crash_killed
    const crash_typeAInjury = req.body.crash_typeAInjury
    const crash_typeBInjury = req.body.crash_typeBInjury
    const crash_typeCInjury = req.body.crash_typeCInjury
    const crash_noInjury = req.body.crash_noInjury
    const crash_injuryUnknown = req.body.crash_injuryUnknown
    const crash_latitude = req.body.crash_latitude
    const crash_longitude = req.body.crash_longitude

    const query = `CALL public.add_crash('${crash_key_crash}','${crash_date}','${crash_time}','${crash_locationRelationToRoad}','${crash_locationInNearIndicator}','${crash_locationCity}','${crash_locationRoadName}','${crash_locationRampIndicator}','${crash_locationMilesFromRoad}','${crash_locationFeetFromRoad}','${crash_locationDirectionFromRoad}','${crash_locationAtFromIndicator}','${crash_locationRoadNameAt}','${crash_locationDirectionToRoad}','${crash_locationRoadNameTo}','${crash_firstHarmfulEvent}','${crash_mostHarmfulEvent}','${crash_roadClassification}','${crash_roadFeature}','${crash_trafficControlType}','${crash_weatherCondition1}','${crash_weatherCondition2}','${crash_weatherContributedToCrash}','${crash_drivers}','${crash_passengers}','${crash_pedestrians}','${crash_pedalCyclists}','${crash_otherPersonType}','${crash_unknownPersonType}','${crash_killed}','${crash_typeAInjury}','${crash_typeBInjury}','${crash_typeCInjury}','${crash_noInjury}','${crash_injuryUnknown}','${crash_latitude}','${crash_longitude}')`;

    try {
        const result = await pool.query(query);
        res.json(result.rowCount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/getAllCrashes', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('SELECT * FROM get_crashes($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getCrashTypeCounts', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from get_crashes_by_type($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getCrashesByLocation', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from get_crashes_by_location($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//--- CALLS
router.post("/postCall", async (req, res) => {

    const agency = req.body.agency;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const incidentType = req.body.incidentType;
    const location = req.body.location;
    const callDate = req.body.callDate;
    const callTime = req.body.callTime;

    const query = `CALL public.add_call('${agency}','${latitude}','${longitude}','${incidentType}','${location}','${callDate}','${callTime}')`;

    try {
        const result = await pool.query(query);
        res.json(result.rowCount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/getCall/:_id", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM getcall($1)', [req.params._id]);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/getAllCalls', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('SELECT * FROM get_calls($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getCallCountsByAgency', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from get_calls_by_agency($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getCallCountsByIncident', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from get_calls_by_type($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getCallCountsByHour', async (req, res) => {

    const recordLimit = req.query.limit || 24

    try {
        const result = await pool.query('select * from get_calls_by_hour($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getCallCountsByDayOfWeek', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from get_calls_by_day($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

);


//--- TRAFFIC
router.post("/postTraffic", async (req, res) => {

    const belts = req.body.belts;
    const location = req.body.location;
    const race = req.body.race;
    const arrestType = req.body.arrestType;
    const charge = req.body.charge;
    const subagency = req.body.subagency;
    const dateOfStop = req.body.dateOfStop;
    const color = req.body.color;
    const vehicleType = req.body.vehicleType;
    const accident = req.body.accident;
    const driverState = req.body.state;
    const violationType = req.body.violationType;
    const latitude = req.body.latitude;
    //const driverState =  req.body.driverState;
    const model = req.body.model;
    const personalInjury = req.body.personalInjury;
    const article = req.body.article;
    const description = req.body.description;
    const hazmat = req.body.hazmat;
    const fatal = req.body.fatal;
    const year = req.body.year;
    const propertyDamage = req.body.propertyDamage;
    const agency = req.body.agency;
    const gender = req.body.gender;
    const driverCity = req.body.driverCity;
    const longitude = req.body.longitude;
    const alcohol = req.body.alcohol;
    const timeOfStop = req.body.timeOfStop;
    const commercialVehicle = req.body.commercialVehicle;
    const make = req.body.make;
    const workZone = req.body.workZone;
    const dlState = req.body.dlState;
    const contributedToAccident = req.body.contributedToAccident;
    const commercialLicense = req.body.commercialLicense;

    const query = `CALL public.add_trafficstop('${belts}'::text,'${location}'::text,'${race}'::text,'${arrestType}'::text,'${charge}'::text,'${subagency}'::text,'${dateOfStop}'::date,'${color}'::text,'${vehicleType}'::text,'${accident}'::text,'${driverState}'::text,'${violationType}'::text,'${latitude}'::numeric,'${model}'::text,'${personalInjury}'::text,'${article}'::text,'${description}'::text,'${hazmat}'::text,'${fatal}'::text,'${year}'::numeric,'${propertyDamage}'::text,'${agency}'::text,'${gender}'::text, '${driverCity}'::text,'${longitude}'::numeric,'${alcohol}'::text,'${timeOfStop}'::time,'${commercialVehicle}'::text,'${make}'::text,'${workZone}'::text,'${dlState}'::text,'${contributedToAccident}'::text,'${commercialLicense}'::text)`;

    try {
        const result = await pool.query(query);
        res.json(result.rowCount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/getAllTraffic', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('SELECT * FROM get_trafficstops($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getTrafficStopDescriptionCounts', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from get_traffic_stops_by_type($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getTrafficStopGenderCounts', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from get_traffic_stops_by_gender($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getTrafficStopMakeCounts', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from get_traffic_stops_by_make($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getTrafficStopRaceCounts', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from get_traffic_stops_by_race($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
