var winston = require('winston');
var config = require('winston/lib/winston/config');

var logger = new (winston.Logger)({
    levels: {
        trace: 0,
        input: 1,
        verbose: 2,
        prompt: 3,
        debug: 4,
        info: 5,
        data: 6,
        help: 7,
        warn: 8,
        error: 9
    },
    colors: {
        trace: 'magenta',
        input: 'grey',
        verbose: 'cyan',
        prompt: 'grey',
        debug: 'blue',
        info: 'green',
        data: 'grey',
        help: 'cyan',
        warn: 'yellow',
        error: 'red'
    },
    transports: [
        new (winston.transports.Console)({
            timestamp: function () {
                return new Date().toISOString();
            },
            colorize: true,
            formatter: function (options) {
                var meta = '';
                if (options.meta && Object.keys(options.meta).length) {
                    meta = JSON.stringify(options.meta);
                }

                return '[' +  config.colorize(options.level, options.timestamp()) +'] - ' +
                    config.colorize(options.level, options.level.toUpperCase()) +': '
                    + (undefined !== options.message ? options.message : '') + ' ' +
                    meta
            }
        })
    ],
    exceptionHandlers: [
        new (winston.transports.Console)({
            timestamp: function () {
                return new Date().toISOString();
            },
            colorize: true,
            formatter: function (options) {
                return '[' + config.colorize(options.level, options.timestamp()) + '] - ' +
                    config.colorize(options.level, options.level.toUpperCase()) + ': '+
                    (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ options.meta.stack.join('\n') : '')
            }
        })
    ],
    exitOnError: false
});

module.exports = logger;