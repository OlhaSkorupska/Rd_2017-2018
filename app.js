'use strict';

const config = require('./config');
const logger = require('./server/utils/logger');
const app = require('./server/api');
const http = require('http');
const env = process.env.NODE_ENV || 'dev';

http.createServer(app).listen(config.server.port, serverStartCallback);

function serverStartCallback() {
    logger.info("Express server is now live at port " + this.address().port + " with " + env + " config");
}

//module.exports = app;

