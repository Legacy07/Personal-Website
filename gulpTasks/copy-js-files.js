var gulp = require('gulp');

// will go through every html files under the tags - <!--build:js js/main.min.js --> 
// <!-- endbuild -->
// so it will put every js file in a min.js file when built so we dont keep include any js file in html pages.
// this also works with files in different folders too. 

// Css files will be seperated from html files just like how its done with js files.
module.exports = function () {
    log('Moving js and css files to build');

    return gulp.src('app/*.html')
            .pipe(useref())
            .pipe(gulpIf('*.js', uglify()))
            // Minifies only if it's a CSS file
            .pipe(gulpIf('*.css', cssnano()))
            .pipe(gulp.dest('build'));
};