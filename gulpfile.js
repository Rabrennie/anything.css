/**
 * shitty temporary build because i don't quite know how to gulp
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sassError = require('gulp-sass-error').gulpSassError;

gulp.task('build', function() {
       gulp.src('src/anything.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./dist/'))
});

gulp.task('default',function() {
    gulp.watch('sass/**/*.scss', ['build']);
});
