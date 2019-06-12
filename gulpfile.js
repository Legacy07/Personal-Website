var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence').use(gulp);

gulp.task('clean-build', require('./gulpTasks/clean-build'));
gulp.task('styles', require('./gulpTasks/styles'));
gulp.task('copy-all-files', require('./gulpTasks/copy-all-files'));
gulp.task('optimise-dev', require('./gulpTasks/optimise-dev'));
gulp.task('watch-for-changes', require('./gulpTasks/watch-for-changes'));

gulp.task("test-gulp", function () {
    return gulp;
});

gulp.task('serve-dev', function () {
    runSequence('clean-build',
        'styles',
        'copy-all-files'
        // 'watch-for-changes',
        // 'optimise-dev'
    );
});