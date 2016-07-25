'use strict';

var gulp = require('gulp');
var del = require('del');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var runSequence = require('run-sequence');
var fs = require('fs');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var cleanCSS = require('gulp-clean-css');

//////////////////////////////////
// utility tasks
//////////////////////////////////

var packageJson = JSON.parse(fs.readFileSync('./package.json'));

//clean distribution directory
gulp.task('clean', function () {
    return del(['dist', 'build']);
});

//test the quality of the code with ESLint
gulp.task('lint', function () {
    return gulp.src(['./app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.formatEach())
        .pipe(eslint.failAfterError());
});

//////////////////////////////////
// build tasks
//////////////////////////////////
//build css from sass and compress
gulp.task('build-sass', function () {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./build/stylesheets'))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(rename({extname: '.min.css'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/stylesheets'));
});

//build css from sass and compress for production
//does not create map files
gulp.task('build-sass-prod', function () {
    return gulp.src('./assets/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/stylesheets'))
        .pipe(cleanCSS())
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./dist/stylesheets'));
});

//copy index.html to dist directory
gulp.task('build-index', function () {
    return gulp.src(['./index.html'])
        .pipe(gulp.dest('dist/'))
        .pipe(inject(gulp.src(['./scripts/*.js', './stylesheets/*.css'], {
            read: false,
            cwd: __dirname + '/dist'
        }), {relative: true, addRootSlash: false}))
        .pipe(inject(gulp.src(bowerFiles({
            paths: {
                bowerDirectory: 'dist/bower_components'
            }
        }), {read: false, cwd: __dirname + '/dist'}), {name: 'bower', relative: true}))
        .pipe(gulp.dest('dist/'));
});

//copy assets to dist directory
gulp.task('build-assets', function () {
    return gulp.src(['./assets/img/**/*'])
        .pipe(gulp.dest('dist/'));
});

//copy bower components to dist directory
gulp.task('build-bower', function () {
    return gulp.src(['./bower_components/**/*'])
        .pipe(gulp.dest('dist/bower_components/'));
});

//create template cache
gulp.task('build-template-cache', function () {
    return gulp.src("./app/**/*.html")
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: 'templates',
            rename: function (templateUrl) {
                var url = templateUrl.substring(templateUrl.indexOf('/') + 1);
                return url;
            }
        }))
        .pipe(concat("partials.min.js"))
        .pipe(gulp.dest("./build/scripts"));
});

//build js files for development
gulp.task('build-js-dev', function () {
    var concatName = packageJson.name + '-' + packageJson.version + '.js';
    return gulp.src(['./app/**/*.js', './build/scripts/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat(concatName))
        .pipe(gulp.dest('build/scripts'))
        .pipe(uglify({mangle: false}))
        .pipe(rename({extname: '.min.js'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/scripts'));
});

//build js files for production
gulp.task('build-js-prod', function () {
    var concatName = packageJson.name + '-' + packageJson.version + '.js';
    return gulp.src(['./app/**/*.js', './build/js/*.js'])
        .pipe(concat(concatName))
        .pipe(gulp.dest('build/scripts'))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('dist/scripts'));
});

//////////////////////////////////
// watch tasks
//////////////////////////////////
//watch changes in the app code (html and js files)
gulp.task('watch', function () {
    return gulp.watch([
        './app/**/*.js',
        './app/**/*.html',
        'index.html'
    ], ['build-dev']);
});

//watch changes in the design domain
gulp.task('watch-des', function () {
    return gulp.watch([
        './app/**/*.html',
        './assets/sass/*.less',
        './assets/sass/*.scss',
        './assets/sass/*.css',
        './assets/img/*.*'
    ], ['build-dev']);
});

//////////////////////////////////
// global tasks
//////////////////////////////////
//build app for development
gulp.task('build-dev', function (callback) {
    runSequence('clean', 'lint', 'build-template-cache',
        ['build-assets', 'build-sass', 'build-js-dev', 'build-bower'],
        'build-index', callback);
});

//build app for production
gulp.task('build-prod', function (callback) {
    runSequence('clean', 'lint', 'build-template-cache',
        ['build-assets', 'build-sass-prod', 'build-js-prod', 'build-bower'],
        'build-index', callback);
});

//default task specification
gulp.task('default', ['build-dev']);

