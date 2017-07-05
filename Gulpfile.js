var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    exec = require('gulp-exec'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del');

gulp.task('pygments', function() {
    var options = {
        continueOnError: false,
        pipeStdout: false
    };
});

gulp.task('clean', function() {
    del([
        'static/js/dist/**/*.min.js'
    ]);
});

gulp.task('sass', function() {
    gulp.src('sass/style.scss')
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('static/css/'));
});

gulp.task('minify-sass', function() {
    gulp.src('sass/style.scss')
        .pipe(sass({ outputStyle: 'compressed' })
            .on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('static/css/'));
});

gulp.task('minify-js', function() {
  gulp.src(['static/js/**/*.js', '!static/js/dist/**/*.min.js',   '!**/*.min.js'])
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        },
        noSource: true
    }))
    .pipe(gulp.dest('static/js/dist/'));
});

gulp.task('default', ['sass', 'minify-js']);

gulp.task('dist', ['minify-sass', 'minify-js']);

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});