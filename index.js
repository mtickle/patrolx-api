require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

//--- Make the connection to ATLAS
mongoose.set('strictQuery', true);
mongoose.connect(mongoString);

const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

//--- Manage some things on the APP: Express and CORS
const app = express();
app.use(cors())
app.use(express.json());

//--- Name and implement the ROUTES
const routes = require('./routes/routes');
app.use('/api', routes)

//--- Open the SERVER
app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})