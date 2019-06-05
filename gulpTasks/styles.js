var gulp = require('gulp');
var log = require('./helperFunctions/log');
var $ = require('gulp-load-plugins')({ lazy: true });

/**
 * Compile SASS to CSS
 * @return {Stream}
 */
module.exports = function () {
    log('Compiling SASS to CSS');

    return gulp
        .src('app/sass/*.scss')
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.autoprefixer())
        .pipe(gulp.dest('build/css'));
};