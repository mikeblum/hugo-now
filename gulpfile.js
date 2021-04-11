const { series, src, dest } = require('gulp')
    sass = require('gulp-sass'),
    minify = require('gulp-minify'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del');

function build_sass(cb) {
    src('sass/style.scss')
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(dest('static/css/'));
    cb();
}

function minify_sass(cb) {
    src('sass/style.scss')
        .pipe(sass({ outputStyle: 'compressed' })
            .on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('static/css/'));
    cb();
}

function minify_js(cb) {
    src(['static/js/**/*.js', '!static/js/dist/**/*.min.js',   '!**/*.min.js'])
      .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        },
        noSource: true
    }))
    .pipe(dest('static/js/dist/'));
    cb();
}

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  del([
    'static/js/dist/**/*.min.js'
  ]);
  cb();
}

function build(cb) {
  // body omitted
  cb();
}

exports.build = build;

exports.default = series(build_sass, minify_js);

exports.dist = series(minify_sass, minify_js);
