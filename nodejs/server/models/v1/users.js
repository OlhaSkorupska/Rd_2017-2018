'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserScheme = new Schema({
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    birth: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    picture: {
        type: String,
        default: null
    },    
    language: {
        type: String,
        default: null
    } 
});

const Users = mongoose.model('User', UserScheme, 'users');
console.log('Users');
module.exports = Users;