"use strict";

class Controller {
    constructor (version) {
        this.version = version;

        /**
         * validate skip and count parameters for getting any resource
         *
         * @param req
         * @param res
         * @param next
         *
         * @returns {*}
         *
         * @private
         */
        this.validateLimits  = function (req, res, next) {

            req.query.limit = Math.abs(parseInt(req.query.limit)) ? Math.abs((parseInt(req.query.limit))) : 50;
            req.query.offset = Math.abs(parseInt(req.query.offset)) ? Math.abs(parseInt(req.query.offset)) : 0;

            return next();
        };

        this.validator = require('./../validators/' + version)
    }
}

module.exports = Controller;