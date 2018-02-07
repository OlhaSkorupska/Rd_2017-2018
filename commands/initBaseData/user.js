'use strict';

const mongoose = require('mongoose');
const co = require('co');

const Models = require('./../../server/models/v1');
const testUser = require('./../../seeds/testUser');
console.log(Models);
console.log(testUser);
module.exports = function() {
    return new Promise ((resolve, reject) => {
        co(function *() {
            try {
                yield Models.Users.insertMany(testUser);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    })
};


