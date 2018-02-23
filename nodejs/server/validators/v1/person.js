'use strict';

var Base = require('./base.js');
var validator = require('./../../utils/bodyValidator');

class PersonValidator extends Base {

    static personSearch(req, res, next){
        return validator({
            properties: {
                location: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                email: {
                    type: "string",
                    required: true,
                    allowEmpty: false,
                    format: "email",
                    minLength: 5,
                    maxLength: 100
                }
            }
        })(req, res, next);
    }

    static personEdit(req, res, next) {
        return validator({
            properties: {
                email: {
                    type: "string",
                    required: true,
                    allowEmpty: false,
                    format: "email",
                    minLength: 5,
                    maxLength: 100
                },
                pnum: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                firstName: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                lastName: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                street1: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                street2: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                city: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                state: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                zip: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                country: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                dob: {
                    type: "string",
                    required: false,
                    allowEmpty: false
                },
                gender: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    enum: ['male', 'female']
                },
                location: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
            }
        })(req, res, next);
    }

}

module.exports = PersonValidator;