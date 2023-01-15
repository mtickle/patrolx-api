
import { verify } from "jsonwebtoken";

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =  req.body.token || req.query.token || req.headers["x-access-token"];


  console.log("Body Token: " + req.body.token)
  console.log("Query Token: " + req.query.token)
  console.log("Header Token: " + req.headers["x-access-token"])
  console.log("Actual Token: " + token)
 


if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    console.log(err)
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;