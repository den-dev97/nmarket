const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('scss-compile', function(){
    return gulp.src('./styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./styles/'))
})

gulp.task('watch', function () {
    gulp.watch('./styles/*.scss', gulp.series('scss-compile'))
})