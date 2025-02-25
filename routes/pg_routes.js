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
import randomstring from "randomstring";

//--- PostgreSQL configuration
dotenv.config()

const pool = new pg.Pool({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
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
    const reportedhour = req.body.reportedHour;
    const longitude = req.body.longitude;
    const reportedyear = req.body.reportedYear;
    const reportedmonth = req.body.reportedMonth;
    const latitude = req.body.latitude;
    const crimecode = req.body.crimeCode;
    const incidentid = req.body.incidentID;
    const crimetype = req.body.crimeCode;
    const district = req.body.district;
    const reporteddayofweek = req.body.reportedDayOfWeek;
    const reporteddate = req.body.reportedDate;
    const reportedtime = req.body.reportedTime;
    const reportedday = req.body.reportedDay;
    const updateddate = req.body.updatedDate;
    const crimedescription = req.body.crimeDescription;
    const cityofincident = req.body.cityOfIncident;
    const reportedblockaddress = req.body.reportedBlockAddress;

    const query = `CALL public.addincident('${incidentid}','${casenumber}','${reportedhour}','${longitude}','${reportedyear}','${reportedmonth}','${latitude}','${crimecode}','${crimetype}','${district}','${reporteddayofweek}','${reporteddate}','${reportedtime}','${reportedday}','${updateddate}','${crimedescription}','${cityofincident}','${reportedblockaddress}');`;

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
        const result = await pool.query('select * from getincidentcountsbytype($1)', [recordLimit]);
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
        const result = await pool.query('select * from getincidentcountsbyhour($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getIncidentCountsByDistrict', async (req, res) => {

    const recordLimit = req.query.limit || 10
    const offset = req.query.offset || 0;

    try {
        const result = await pool.query('select * from getincidentcountsbydistrict($1)', [recordLimit]);
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
        const result = await pool.query('select * from getincidentcountsbyday($1)', [recordLimit]);
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

    const query = `CALL public.addcall('${agency}','${latitude}','${longitude}','${incidentType}','${location}','${callDate}','${callTime}')`;
    
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

    const belts =  req.body.belts;
    const location =  req.body.location;
    const race =  req.body.race;
    const arrestType =  req.body.arrestType;
    const charge =  req.body.charge;
    const subagency =  req.body.subagency;
    const dateOfStop =  req.body.dateOfStop;
    const color =  req.body.color;
    const vehicleType =  req.body.vehicleType;
    const accident =  req.body.accident;
    const state =  req.body.state;
    const violationType =  req.body.violationType;
    const latitude =  req.body.latitude;
    const driverState =  req.body.driverState;
    const model =  req.body.model;
    const personalInjury =  req.body.personalInjury;
    const article =  req.body.article;
    const description =  req.body.description;
    const hazmat =  req.body.hazmat;
    const fatal =  req.body.fatal;
    const year =  req.body.year;
    const propertyDamage =  req.body.propertyDamage;
    const agency =  req.body.agency;
    const gender =  req.body.gender;
    const driverCity =  req.body.driverCity;
    const longitude =  req.body.longitude;
    const alcohol =  req.body.alcohol;
    const timeOfStop =  req.body.timeOfStop;
    const commercialVehicle =  req.body.commercialVehicle;
    const make =  req.body.make;
    const workZone =  req.body.workZone;
    const dlState =  req.body.dlState;
    const contributedToAccident =  req.body.contributedToAccident;
    const commercialLicense =  req.body.commercialLicense;

    const query = `CALL public.addtraffic('${belts}','${location}','${race}','${arrestType}','${charge}','${subagency}','${dateOfStop}','${color}','${vehicleType}','${accident}','${state}','${violationType}','${latitude}','${driverState}','${model}','${personalInjury}','${article}','${description}','${hazmat}','${fatal}','${year}','${propertyDamage}','${agency}','${gender}', '${driverCity}','${longitude}','${alcohol}','${timeOfStop}','${commercialVehicle}','${make}','${workZone}','${dlState}','${contributedToAccident}','${commercialLicense}')`;

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
        const result = await pool.query('select * from gettrafficstopdescriptioncounts($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getTrafficStopGenderCounts', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from gettrafficstopgendercounts($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getTrafficStopMakeCounts', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from gettrafficstopmakecounts($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getTrafficStopRaceCounts', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('select * from gettrafficstopracecounts($1)', [recordLimit]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
