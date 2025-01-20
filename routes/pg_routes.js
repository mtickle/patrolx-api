//--- Notes
//---- 9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn is a good API Key
//--- http://localhost:3001/api/getAllCalls?limit=1

//--- Models
import { incidentsModel } from "../models/incidents.js";

//--- Helpers
import dotenv from 'dotenv'
import auth from "../middlewares/auth.js";
import { Router } from "express";
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
    port: process.env.DATABASE_PORT
});

//--- INCIDENTS
router.get('/getAllIncidents', async (req, res) => {

    const recordLimit = req.query.limit || 10

    try {
        const result = await pool.query('SELECT * FROM getincidents($1)', [recordLimit]);
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

export default router;
