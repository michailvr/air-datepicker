var gulp = require('gulp'),
    gzip = require('gulp-gzip');

module.exports = function (done) {
    gulp.src('dist/js/datepicker.min.js')
        .pipe(gzip())
        .pipe(gulp.dest('dist/'));
    done();
};

