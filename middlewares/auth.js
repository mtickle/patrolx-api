//--- Models
import { usersModel } from "../models/users.js";

//--- Check the API Key
const checkKey = async (req, res, next) => {
  let inApiKey = req.headers["x-api-key"]; // Grab the key from x-api-key

  //--- Is there an API Key being passed in?
  if (!inApiKey) {
    res
      .status(403)
      .send({ error: { code: 403, message: "No API Key Specified." } });
    return;
  }

  var query = usersModel.find({ apiKey: inApiKey }); // Run a lookup against the users collection

  //--- Work up the results of the find query above,
  query.count(function (err, count) {
    if (err) {
      // Something broke
      console.log(err);
      res.send({
        error: {
          code: 403,
          message: "Could not verify API Key because of an error.",
        },
      });
    } else if (count >= 1) {
      // Found a user record. Move along.
      next();
    } else {
      // No records found. Deny.
      res.send({ error: { code: 403, message: "Invalid API Key." } });
    }
  });
};

export default { checkKey };
