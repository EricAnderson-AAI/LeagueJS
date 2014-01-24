/*global require*/

(function () {
    'use strict';

    var gulp = require('gulp'),
        lr = require('tiny-lr'),
        jshint = require('gulp-jshint'),
        mocha = require('gulp-mocha'),
        istanbul = require("gulp-istanbul"),
        clean = require('gulp-clean'),
        server = lr();

    gulp.task('lint', function () {
        gulp.src(['./lib/*', './test/*'])
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('default'));
    });

    gulp.task('istanbul', function (callback) {
        gulp.src('./lib/*.js')
            .pipe(istanbul())
            .on('end', callback);
    });

    gulp.task('test', function () {
        gulp.src('./test/*.js').pipe(mocha({
            reporter: 'spec'
        }));
    });

    gulp.task('test-coverage', function () {
        gulp.run('istanbul', function () {
            gulp.src('./test/*.js')
                .pipe(mocha())
                .pipe(istanbul.writeReports());
        });
    });

    gulp.task('clean-coverage', function () {
        gulp.src('./coverage', {read: false })
            .pipe(clean({force: true}));
    });

    gulp.task('dev', function () {
        gulp.run('lint', 'test');
        gulp.watch(['./lib/*', './test/*'], function () {
            gulp.run('lint', 'test');
        });
    });
}());