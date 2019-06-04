var gulp = require('gulp');
var log = require('./helperFunctions/log');

module.exports = function () {    
    var paths = {
        everything: ['app/**'],
        excluding: ['!app/sass/**', '!app/Website logos/**', '!app/WebGL/**', '!app/README.md'], 
        build: ['build/']
    };
    log('Copying files to build excluding ' + paths.excluding.toString());
    return gulp
            .src(paths.everything.concat(paths.excluding))
            .pipe(gulp.dest(paths.build));     
};

// function copyFiles(paths){
//     var paths = {
//         everything: ['app/**'],
//         excluding: ['!app/js/**', '!app/sass/**', '!app/Website logos/**'], 
//         dist: ['dist/']
//     };
// }