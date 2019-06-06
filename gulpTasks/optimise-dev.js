var gulp = require('gulp');
var log = require('./helperFunctions/log');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

module.exports = function () {
    log('Optimising files.');

    minifyScripts();
    optimiseImgs();
};

// will go through every html files under the tags - <!--build:js js/main.min.js --> 
// <!-- endbuild -->
// so it will put every js file in a min.js file when built so we dont keep include any js file in html pages.
// this also works with files in different folders too. 

// Css files will be seperated from html files just like how its done with js files.
function minifyScripts() {
    log('Minifying js and css');

    return gulp.src('build/**/*.html', {
            allowEmpty: true
        })
        .pipe(useref())
        // Minifies only if it's a JS file
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulp.dest('build'));
}

function optimiseImgs() {
    log('Optimising images.');

    return gulp.src('app/images/**/*.+(png|jpg|jpeg)')
        .pipe(cache(imagemin({
            //enables to load image from its lowest resolution
            interlaced: true
        })))
        .pipe(gulp.dest('build/images'));
}