var gulp = require('gulp');
// var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// var useref = require('gulp-useref');
// var uglify = require('gulp-uglify');
// var gulpIf = require('gulp-if');
// var cssnano = require('gulp-cssnano');

var runSequence = require('run-sequence').use(gulp);
var $ = require('gulp-load-plugins')({
    lazy: true
});

// gulp.task('default', ['copy-html']);

gulp.task('clean-build', require('./gulpTasks/clean-build'));
// gulp.task('inject', require('./gulpTasks/inject'));
// gulp.task('move-index-to-build', require('./gulpTasks/move-index-to-build'));
// gulp.task('move-js-to-build', require('./gulpTasks/move-js-to-build'));
// gulp.task('optimise-dev', require('./gulpTasks/optimise-dev'));
gulp.task('styles', require('./gulpTasks/styles'));
gulp.task('copy-all-files', require('./gulpTasks/copy-all-files'));
gulp.task('optimise-dev', require('./gulpTasks/optimise-dev'));
gulp.task('watch-for-changes', require('./gulpTasks/watch-for-changes'));

gulp.task('serve-dev', function () {

    runSequence('clean-build',
        'styles',
        'copy-all-files',
        'optimise-dev'
        // function () {
        //     serve(true);
        // }
    );
})

///////////////////////////////////////////////////////////////////////////////////// Functions /////////////////////////////////////////////////////////////////////////////////////////////////////

function serve(isDev) {

    startBrowserSync(isDev);
}

function startBrowserSync(isDev) {

    if (browserSync.active) {
        return;
    }

    var options = {
        proxy: 'http://www.ahmetince.co.uk',
        browser: ["chrome"],
        ghostMode: { // these are the defaults t,f,t,t
            clicks: true,
            location: false,
            forms: true,
            scroll: true
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'info',
        logPrefix: 'gulp-patterns',
        notify: true,
        reloadDelay: 1000
    };

    browserSync.init(options);
}