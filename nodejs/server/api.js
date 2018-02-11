"use strict";

var bodyParser = require('body-parser');
var ControllerManager = require('./controllers/ControllerManager');
var errorHandler = require('./utils/errorHandler');
var express = require('express');
var cors = require('cors');
var requestHandler = require('./utils/requestHandler');

//include routes
var appApies = require ('./routes/app');

//initialize the app
var app = module.exports = express();

app.use(cors());

if (process.env.NODE_ENV !== 'prod') {
    app.use(requestHandler);
}

app.use(express.static(__dirname + '/../frontend'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.raw({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', appApies.default);

//set up http error handler
app.use(errorHandler(app));