var clean = require('./helperFunctions/clean');

/**
 * Remove all js, css and html from the build and temp folders
 * @param  {Function} done - callback when complete
 */
module.exports = function(done) {
    var files = [].concat(
        "build/index.html",
        "build/js/**",
        "build/css/**"        
    );

    clean(files, done);
};