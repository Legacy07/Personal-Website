var gulp = require('gulp');
var log = require('./helperFunctions/log');
var $ = require('gulp-load-plugins')({ lazy: true });
var browserSync = require('browser-sync').create();

/**
 * Compile SASS to CSS
 * @return {Stream}
 */
module.exports = function () {
    CompileStyles();
};

function CompileStyles(){
    log('Compiling SASS to CSS');

    return gulp
    .src('app/sass/*.scss')
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
}