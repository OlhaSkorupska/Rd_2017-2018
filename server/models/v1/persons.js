'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PersonScheme = new Schema({
    email: {
        type: String,
        required: true
    },
    pnum: {
        type: String,
        default: null
    },
    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    street1: {
        type: String,
        default: null
    },
    street2: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    zip: {
        type: String,
        default: null
    },
    country: {
        type: String,
        default: null
    },
    dob: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        enum:['male', 'female']
    },
    location: {
        type: String,
        required: true
    },
    mailed: {
        type: Boolean,
        default: false
    },
    signedup: {
        type: Boolean,
        default: false
    },
    signedupdate: {
        type: Date,
        default: Date.now
    }

});

const Persons = mongoose.model('Person', PersonScheme, 'persons');
console.log('Persons');
module.exports = Persons;