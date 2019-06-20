var gulp = require('gulp');
var log = require('./helperFunctions/log');
var styles = require('./styles');
var browserSync = require('browser-sync').create();

module.exports = function () {
    watch();
}

function watch() {
    log('Watching for changes.');

    gulp.task('watch', function(){
        gulp.watch('app/sass/**/*.scss', styles);
        gulp.watch('app/*.html', browserSync.reload);
    });
}