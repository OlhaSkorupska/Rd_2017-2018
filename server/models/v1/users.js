'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserScheme = new Schema({
    balance: {
        type: String,
        required: true
    },
    age: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    eyeColor: {
        type: String,
        default: null
    },    
    gender: {
        type: String,
        enum:['male', 'female']
    },
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }       
});

const Users = mongoose.model('User', UserScheme, 'users');
console.log('Users');
module.exports = Users;