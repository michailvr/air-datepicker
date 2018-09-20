var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    clone = require('gulp-clone'),
    wrap = require('gulp-wrap'),
    concat = require('gulp-concat');

module.exports = function (done) {
    var stream = gulp.src([
        'src/js/function-bind.js',
        'src/js/datepicker.js',
        'src/js/body.js',
        'src/js/navigation.js',
        'src/js/timepicker.js'
    ])
        .pipe(concat('datepicker.js'))
        .pipe(wrap(';(function (window, $, undefined) { <%=contents%> })(window, jQuery);'));

    stream.pipe(clone())
        .pipe(gulp.dest('dist/js'));

    stream.pipe(clone())
        .pipe(uglify())
        .pipe(rename('datepicker.min.js'))
        .pipe(gulp.dest('dist/js'));

    done();
};
