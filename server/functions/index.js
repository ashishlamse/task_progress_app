const functions = require('firebase-functions');
const admin = require('firebase-admin');
var express = require("express");
const cors = require("cors");
var path = require("path");
require('dotenv').config();
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var app = express();
const proxy = require('http-proxy-middleware');
// app.use(cors({ origin: true }));
app.use(cors());
app.set("views", path.join(__dirname, "templates"));
app.set("trust proxy", 1); // trust first proxy
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "templates")));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
const task_progress_app = functions.https.onRequest(app);
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/apisDoc', (req, res) => {
      res.send("Hello I am working fine");
  })

//Routers
// app.use(require('./router'));



module.exports = {
    //Function name
    task_progress_app
}