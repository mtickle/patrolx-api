
//--- Imports
import express, { json } from 'express';
import fs from 'fs'
import morgan from 'morgan';
import rateLimit from 'express-rate-limit'
import cors from 'cors';


//--- Implement rate limiting.
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // Set a 15 minute window
	max: 10000, // Set a maximum request limit per IP per window.
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

//--- Set the proper header because CORS
var corsOptions = {
	origin: '*'
}

//--- Manage some things on the APP: Express and CORS
const app = express();
app.use(json());
app.use(limiter);
app.use(cors(corsOptions));


//--- Logging
app.use(morgan('common', {
	stream: fs.createWriteStream('./access.log', { flags: 'a' })
}));

//--- Routes
// //--- Name and implement the ROUTES
import routes from './routes/pg_routes.js';
app.use('/api', routes)


// //--- INCIDENTS
// app.get('/incidents', async (req, res) => {
// 	try {
// 	  const result = await pool.query('SELECT * FROM incidents order by reportedDate DESC limit 20');
// 	  res.json(result.rows);
// 	} catch (error) {
// 	  console.error('Error fetching users:', error);
// 	  res.status(500).json({ error: 'Internal Server Error' });
// 	}
//   });

//--- Open the SERVER
app.listen(8080, () => {
	console.log(`API listening on ${8080}`)
})