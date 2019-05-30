var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

// get all the scss files from app/sass, compile them in css and placed in build/css
gulp.task('sass', function(){
    return gulp.src('app/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
});

//watch for files if they have been changed. 
gulp.task('watch', function(){
    gulp.watch('app/scss/*.scss', ['sass']); 
    // Other watchers
});

// will go through every html files under the tags - <!--build:js js/main.min.js --> 
// <!-- endbuild -->
// so it will put every js file in a min.js file when built so we dont keep include any js file in html pages.
// this also works with files in different folders too. 
gulp.task('useref', function(){
    return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('build'))
});

// Css files will be seperated from html files just like how its done with js files.
gulp.task('useref', function(){
    return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('build'))
});

