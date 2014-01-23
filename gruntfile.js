/*global module*/

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        exec: {
            clean: [
                './lib/*.html'
            ],
            cover: {
                cmd: 'istanbul cover node_modules/mocha/bin/_mocha'
            },
            done: {
                cmd: function () {
                    return 'echo Coverage has been calculated. See coverage directory for details.';
                }
            },
            cleaned: {
                cmd: function () {
                    return 'echo Coverage directory has been removed.';
                }
            }
        },
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                './lib/*.js'
            ],
            options: {
                ignores: ['karma.config.js'],
                bitwise: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                plusplus: false,
                regexp: true,
                undef: true,
                unused: true,
                strict: true,
                trailing: true,
                indent: 4,
                quotmark: 'single',
                maxparams: 10,
                maxcomplexity: 10,
                maxlen: 120,
                node: true,
                browser: true,
                jquery: true,
                devel: true,
                white: false,
                laxcomma: true,
                onevar: true
            }
        },
        simplemocha: {
            test: {
                src: './test/**.js',
                options: {
                    reporter: 'json'
                }
            },
            coverage: {
                src: './test/**.js',
                options: {
                    reporter: 'json-cov'
                }
            }
        },
        karma: {
            options: {
                configFile: 'karma.config.js'
            },
            unit: {
                runnerPort: 9101,
                background: true
            },
            continuous: {
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Commands for a full coverage test
    grunt.registerTask('cover', ['jshint', 'simplemocha:test', 'exec:cover', 'exec:done']);
};