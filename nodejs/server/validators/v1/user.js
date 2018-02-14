'use strict';

var Base = require('./base.js');
var validator = require('./../../utils/bodyValidator');

class UserValidator extends Base {

    static userSearch(req, res, next){
        return validator({
            properties: {
                language: {
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
        console.log(req.body);
        return validator({
            properties: {
                email: {
                    type: "string",
                    required: false,
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
                },
                pass: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },
                birth: {
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
                picture: {
                    type: "string",
                    required: false,
                    allowEmpty: false,
                    maxLength: 100
                },    
                language: {
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