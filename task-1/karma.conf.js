var webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
      basePath: '',
      exclude: [],
      files: [
        {pattern: 'src/*.js', watched:true, served:false, included:false, nocache:false},
        {pattern: 'tests/*.js',watched:true,served:true,included:true}
      ],
      
      autoWatch: true,
      singleRun:false,
      failOnEmptyTestSuite:false,
      logLevel: config.LOG_WARN, 
      frameworks: ['jasmine'],
      browsers: ['Chrome'],
      reporters: ['mocha'],
      listenAddress: '0.0.0.0',
      hostname: 'localhost',
      port: 9876,
      retryLimit:0,
      browserDisconnectTimeout: 5000,
      browserNoActivityTimeout: 10000,
      captureTimeout: 60000,
   
      client: {
          captureConsole:false,
          clearContext:false,
          runInParent: false,
          useIframe:true,
          jasmine:{
              random: false
          }
      },
   
      /*karma-webpack config*/
      preprocessors: {
            './karma-shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,      

      webpackMiddleware: {
        //turn off webpack bash output when run the tests 
        noInfo: true,
        stats: 'errors-only'
      },
   
      /*karma-mocha-reporter config*/
      mochaReporter: {
          output: 'noFailures'  //full, autowatch, minimal 
      }
    });
  };