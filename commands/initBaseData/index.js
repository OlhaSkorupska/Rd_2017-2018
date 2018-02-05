'use strict';

const _ = require('lodash');
const logger = require('./../../server/utils/logger');
const person = require('./person');

Promise.all([person()])
    .then(() => {
        logger.info("Success");
        return process.exit(0)
    })
    .catch((err) => {
        logger.error(err);
        return process.exit(1);
    });