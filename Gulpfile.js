var gulp = require('gulp'),
    sass = require('gulp-sass'),
    exec = require('gulp-exec'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('pygments', function() {
    var options = {
        continueOnError: false,
        pipeStdout: false
    };
});

gulp.task('sass', function() {
    gulp.src('sass/style.scss')
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('static/css/'));
});

gulp.task('default', ['sass']);

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});