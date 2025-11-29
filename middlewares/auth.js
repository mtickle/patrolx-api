// Import the shared Postgres pool (adjust path as needed)
// If you don't have a shared file yet, instructions are below.
import { pool } from '../db.js';

const checkKey = async (req, res, next) => {
  // Grab the key from header (standardize to lowercase usually, but keeping your convention)
  const inApiKey = req.headers["x-api-key"];

  // 1. Immediate rejection if missing
  if (!inApiKey) {
    return res.status(403).json({
      error: { code: 403, message: "No API Key Specified." }
    });
  }

  try {
    // 2. Query Postgres
    // We only need to select 'id' to prove existence. It's faster than selecting *.
    const query = "SELECT id FROM public.users WHERE api_key = $1";
    const result = await pool.query(query, [inApiKey]);

    // 3. Check results
    if (result.rows.length > 0) {
      // Key found. Proceed.
      next();
    } else {
      // Key not found in DB.
      return res.status(403).json({
        error: { code: 403, message: "Invalid API Key." }
      });
    }

  } catch (err) {
    console.error("Auth Middleware Error:", err);
    return res.status(500).json({
      error: {
        code: 500,
        message: "Internal Server Error during validation."
      }
    });
  }
};

export default { checkKey };