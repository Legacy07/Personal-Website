var gulp = require('gulp');
var log = require('./helperFunctions/log');

module.exports = function () {
    log('Compiling SASS to CSS');

    //watch for files if they have been changed. 
    return gulp
                .watch('app/scss/*.scss', ['sass'])
                .watch('app/*.html');
}