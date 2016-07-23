'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

//test the quality of the code with ESLint
gulp.task('lint', function () {
    return gulp.src(['./app/**/*.js'])
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

gulp.task('watch-des', function () {
    gulp.watch([
        './app/**/*.html',
        './assets/css/*.less',
        './assets/css/*.scss',
        './assets/css/*.css',
        './assets/img/*.*'
    ], ['lint']);
});

//default task specification
gulp.task('default', ['watch']);

