var gulp = require('gulp');
var log = require('./helperFunctions/log');
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

// will go through every html files under the tags - <!--build:js js/main.min.js --> 
// <!-- endbuild -->
// so it will put every js file in a min.js file when built so we dont keep include any js file in html pages.
// this also works with files in different folders too. 

// Css files will be seperated from html files just like how its done with js files.
module.exports = function () {
    log('Optimising files. Minimizing js, css and imgs');

    return gulp.src('build/*.html', {allowEmpty: true})
            .pipe(useref())
            .pipe(gulpIf('*.js', uglify()))
            // Minifies only if it's a CSS file
            .pipe(gulpIf('*.css', cssnano()))
            .pipe(gulp.dest('build'));
};