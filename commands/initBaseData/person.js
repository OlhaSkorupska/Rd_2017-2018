'use strict';

const mongoose = require('mongoose');
const co = require('co');

const Models = require('./../../server/models/v1');
const testPerson = require('./../../seeds/testData');

module.exports = function() {
    return new Promise ((resolve, reject) => {
        co(function *() {
            try {
                yield Models.Persons.insertMany(testPerson);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    })
};




