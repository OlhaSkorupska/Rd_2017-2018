'use strict';
const config = require('./../../config');
const logger = require('./logger');
const mongoose = require('mongoose');

let _instance = null;
let _connection = null;

class MongoConnect {

    constructor() {

        if (!_instance) {
            _instance = mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
            _connection = mongoose.connection;

            _connection.on('error', function(err) {
                logger.error(err);
            });

            _connection.once('open', function () {
                logger.info('Mongo successfully connected');
            });
        }

        return _instance;
    }
}

module.exports = new MongoConnect();


