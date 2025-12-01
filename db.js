import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import pg from 'pg';
import { fileURLToPath } from 'url'; // Required for ES Modules path resolution

dotenv.config();

// Determine the directory name of the current module (index.mjs is assumed here)
// This is equivalent to __dirname in CommonJS
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// CRITICAL FIX: Construct the absolute path to ca.pem
// This ensures the file is found relative to this module's directory.
const caCertPath = path.join(__dirname, 'ca.pem');

if (!fs.existsSync(caCertPath)) {
    console.error(`ERROR: CA certificate not found at: ${caCertPath}`);
}

export const pool = new pg.Pool({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: {
        require: true,
        rejectUnauthorized: true,
        // Use the reliably found absolute path
        ca: fs.readFileSync(caCertPath).toString(),
    },
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});