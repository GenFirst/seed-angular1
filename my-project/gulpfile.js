'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

//test the quality of the code with ESLint
gulp.task('lint', function () {
    return gulp.src(['app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.formatEach())
        .pipe(eslint.failAfterError());
});

//watch changes in the app code (html and js files)
gulp.task('watch', function () {
    gulp.watch([
        './app/**/*.js',
        './app/**/*.html'
    ], ['lint']);
});

//default task specification
gulp.task('default', ['watch']);

