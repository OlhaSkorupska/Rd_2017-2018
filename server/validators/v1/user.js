'use strict';

var Base = require('./base.js');
var validator = require('./../../utils/bodyValidator');

class UserValidator extends Base {

    static userSearch(req, res, next){
        return validator({
            properties: {
                company: {
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

    static userEdit(req, res, next) {
        return validator({
            properties: {
                balance: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                age: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                name: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                eyeColor: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },    
                gender: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    enum: ['male', 'female']
                },
                company: {
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
                },
                phone: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                }
            }
        })(req, res, next);
    }

}

module.exports = UserValidator;