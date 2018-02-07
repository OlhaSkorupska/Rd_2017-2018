'use strict';

const _ = require('lodash');
const logger = require('./../../server/utils/logger');
const person = require('./person');
const user = require('./user');

Promise.all([user()])
    .then(() => {
        logger.info("Success");
        console.log('#######################');
        return process.exit(0)
    })
    .catch((err) => {
        logger.error(err);
        return process.exit(1);
    });