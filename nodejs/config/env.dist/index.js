var db = require('./db');

var defaults = {
        server: {
            port: parseInt(process.env.PORT) || 4010,
            host: process.env.HOST || 'localhost'
        },
        db: db
};

defaults.server.baseUrl = ['http://', defaults.server.host, ':', defaults.server.port].join('');

module.exports = defaults;