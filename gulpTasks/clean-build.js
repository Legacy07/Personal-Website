var clean = require('./helperFunctions/clean');

/**
 * Remove everything in build folder
 * @param  {Function} done - callback when complete
 */
module.exports = function(done) {
    var files = [].concat(
        // "build/*.html",
        // "build/js/**",
        // "build/css/**"       
        "build/*"
    );

    clean(files, done);
};