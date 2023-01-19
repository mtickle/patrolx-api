
//--- Imports
import dotenv from 'dotenv'
import express, { json } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit'

//--- Initialize Dotenv.
dotenv.config()


//--- Implement rate limiting.
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // Set a 15 minute window
	max: 10000, // Set a maximum request limit per IP per window.
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


//--- Connect to MongoDB Atlas
const mongoString = process.env.DATABASE_URL;
mongoose.set('strictQuery', true);
mongoose.connect(mongoString, function(err) {
    if (err) throw err;
});

//--- Manage some things on the APP: Express and CORS
const app = express();  
app.use(json());
app.use(limiter);
app.use(morgan('combined'));

//--- Name and implement the ROUTES
import routes from './routes/routes.js';
app.use('/api', routes)
  
//--- Open the SERVER
app.listen(3001, () => {
    console.log(`API listening on ${3001}`)
})