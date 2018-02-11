'use strict';
const Persons = require('./persons');
const Users = require('./users');
const config = require('./../../../config');
const mongoose = require('mongoose');
const logger = require('./../../utils/logger');

const options = {
    server: {
        socketOptions: {
            socketTimeoutMS: config.db.socketTimeoutMS,
            connectionTimeout: config.db.connectionTimeout
        }
    }
};

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, options);
mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'prod') {
    mongoose.set('debug', true);
}

const connection = mongoose.connection;


connection.on('error', function(err) {
    logger.error(err.message);
});

connection.once('open', function () {
    logger.info('Mongo successfully connected');
});

module.exports = {
    Users, Persons
};