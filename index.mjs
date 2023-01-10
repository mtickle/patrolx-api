import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors';
import express, { json } from 'express';
import pkg from 'mongoose';
const { set, connect, connection } = pkg;
const mongoString = process.env.DATABASE_URL;

//--- Make the connection to ATLAS
set('strictQuery', true);
connect(mongoString);
const database = connection;
database.on('error', function (error) {
        console.log(error);
    })
database.once('connected', () => {
    console.log('Database Connected');
})

//--- Manage some things on the APP: Express and CORS
const app = express();
app.use(cors())
app.use(json());

//--- Name and implement the ROUTES
import routes from './routes/routes.js';
app.use('/api', routes)

//--- Open the SERVER
app.listen(3001, () => {
    console.log(`API listening on ${3001}`)
})