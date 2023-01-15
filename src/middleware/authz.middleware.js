"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;

var express_jwt_1 = require("express-jwt");
var jwks_rsa_1 = require("jwks-rsa");
var dotenv = require("dotenv");
dotenv.config();
exports.checkJwt = (0, express_jwt_1.default)({
    secret: jwks_rsa_1.default.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://".concat(process.env.AUTH0_DOMAIN, "/.well-known/jwks.json")
    }),
    // Validate the audience and the issuer.
    audience: process.env.AUTH0_AUDIENCE,
    issuer: "https://".concat(process.env.AUTH0_DOMAIN, "/"),
    algorithms: ["RS256"]
});
