var env = process.env.NODE_ENV || 'local';
var config = require('./' + env);

module.exports = config;
