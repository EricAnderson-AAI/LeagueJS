/* global basePath:true */
/* global files:true */
/* global JASMINE:true */
/* global JASMINE_ADAPTER:true */
/* global basePath:true */
/* global exclude:true */
/* global reporters:true */
/* global coverageReporter:true */
/* global preprocessors:true */
/* global port:true */
/* global runnerPort:true */
/* global colors:true */
/* global logLevel:true */
/* global LOG_INFO:true */
/* global autoWatch:true */
/* global browsers:true */
/* global captureTimeout:true */
/* global singleRun:true */

// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
    JASMINE,
    JASMINE_ADAPTER,

    // lib
    'lib/*.js',

    // specs
    'test/*.js'
];

// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'coverage'];

//coverage reporter type
coverageReporter = {
    type: 'html',
    dir: 'coverage/',
    file: 'coverage.txt'
};

//initiate istanbul code coverage report
preprocessors = {
    '*.js': 'coverage'
};

// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome', 'Firefox'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;