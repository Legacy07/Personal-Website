var gulp = require('gulp');
var log = require('./helperFunctions/log');

module.exports = function () {
    log('Watching for changes.');

    //watch for files if they have been changed. 
    return gulp
                .watch('app/scss/*.scss', ['sass'])
                .watch('app/*.html');
}