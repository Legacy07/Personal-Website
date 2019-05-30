var $ = require('gulp-load-plugins')({ lazy: true });
var log = require('./log');
var del = require('del');

/**
 * Delete all files in a given path
 * @param  {Array}   path - array of paths to delete
 * @param  {Function} done - callback when complete
 */
module.exports = function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del.sync(path);
    done();
};