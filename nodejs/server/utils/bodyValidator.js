var revalidator = require('revalidator');
var async = require('async');
var config = require('./../../config');

function getRequestBody(req) {
    switch (req.method) {
        case 'GET':
        case 'DELETE':
            return req.query || {};
        case 'POST':
        case 'PUT':
        case 'PATCH':
            return req.body || {};
        default:
            return false;
    }
}

module.exports = function bodyValidator(schema) {
    return function (req, res, next) {
        if (!schema) {
            return next();
        }
        var data = getRequestBody(req);
        if (!data) {
            res.status(400).json({
                error: 400,
                message:'bodyValidator does not support ' + req.method + ' requests'
            })
        } else {
            var result = revalidator.validate(data, schema);
            
            if (result.valid) {
                return next();
            }

            async.map(result.errors, function(error, cb){
                var item = {
                    key : error.property,
                    value: error.message
                };
                cb(null, item);
            }, function(err, result) {
                if (err) {
                    return next(err);
                }

                res.status(400).json({
                    errors: result
                })
            });
        }

    }
};