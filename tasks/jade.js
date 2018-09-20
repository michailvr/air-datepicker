var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    _jade =  require('jade'),
    jade = require('gulp-jade');

_jade.filters.code = function( block ) {
    return block
        .replace( /\&hellip;/g, '…'  )
        .replace( /&/g, '&amp;'  )
        .replace( /</g, '&lt;'   )
        .replace( />/g, '&gt;'   )
        .replace( /"/g, '&quot;' )
        .replace( /#/g, '&#35;'  )
        .replace( /\\/g, '\\\\'  );
};

module.exports = {
    ru: function (done) {
        gulp.src('docs/jade/pages/index-ru.jade')
            .pipe(plumber())
            .pipe(jade({
                data: {
                    lang: 'ru'
                }
            }))
            .pipe(gulp.dest('docs/'));
        done();
    },
    en: function (done) {
        gulp.src('docs/jade/pages/index.jade')
            .pipe(plumber())
            .pipe(jade({
                data: {
                    lang: 'en'
                }
            }))
            .pipe(gulp.dest('docs/'));
        done();
    }
};
