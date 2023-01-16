//--- Models
//import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { usersModel } from "../models/users.js";

//--- Check the API Key
const authenticateKey = async (req, res, next) => {
  
  //--- DEBUG
  console.log(" *** Attempting API Key Check ...");

  //--- Grab the key from x-api-key
  let inApiKey = req.headers["x-api-key"];

  //--- Is there an API Key being passed in?
  if (!inApiKey) {
    res
      .status(403)
      .send({ error: { code: 403, message: "No API Key Specified." } });
    return;
  }

  //--- DEBUG
  console.log(" *** Incoming API Key: " + req.headers["x-api-key"]);



let account3 = usersModel.find({ apiKey: inApiKey}, function (err, docs) {
  if (err){
      console.log(err);
      res.status(403).send({ error: { code: 403, message: "Invalid API Key." } });
  }
  else{
      console.log("First function call : ", docs);
  }
});





  //--- Go find the account in the user collection in ATLAS by inApiKey
  let account = usersModel.find((users) => usersModel.apiKey == inApiKey);
  let account2 = usersModel.find({ apiKey: { $eq: inApiKey } });
  //console.log(account2.users.username);

  if (account2) {
    next();
    //---- Update the call logs here, I guess.
  } else {
    res.status(403).send({ error: { code: 403, message: "Invalid API Key." } });
  }
};

export default { authenticateKey };
