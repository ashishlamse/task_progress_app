const jwt = require("jsonwebtoken");
var express = require("express");
var authRouter = express.Router();
require('dotenv').config({path:'../.env'});
var message=require('../constant/responseMessage').msg;
authRouter.verifyTocken = (req, res, next) => {

    console.log("req.headers['x-access-token']===>", req.headers['x-access-token']);
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message:message.NO_TOKEN_PROVIDED  });

    jwt.verify(token, process.env.secrete_key, (err, decoded) => {
        if (err) return res.status(401).send({ auth: false, message:message.FAILED_TO_AUTHENTICATE  });

        req.decoded = decoded;
       // console.log(decoded);
        next();

    });
};

module.exports = authRouter;