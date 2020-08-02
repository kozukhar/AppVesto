const gulp  = require('gulp');
const sass  = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('browser-sync', function(done) {
    browserSync.init({
        server: {
            baseDir: './app'
        },
        notify: false
    });

    browserSync.watch('./app').on('change', browserSync.reload);

    done();
});

gulp.task('sass', function (done) {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
    done();
});

gulp.task('watch', gulp.series( 'browser-sync','sass', function(done) {
    gulp.watch('app/sass/style.sass', gulp.series('sass'));

    done()
}));
