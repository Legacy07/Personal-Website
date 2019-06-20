var gulp = require('gulp');
var log = require('./helperFunctions/log');

var paths = {
    everything: ['app/**'],
    excluding: ['!app/sass/**', '!app/Website logos/**', '!app/WebGL/**', '!app/README.md', '!app/images/**'], 
    build: 'build/'
};

module.exports = function () {    
    copyFiles(paths);
};

function copyFiles(paths){
    log('Copying files to build excluding ' + paths.excluding.toString());
    return gulp
            .src(paths.everything.concat(paths.excluding))
            .pipe(gulp.dest(paths.build));
}