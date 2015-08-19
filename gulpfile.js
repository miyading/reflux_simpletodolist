var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browserify', function () {
    gulp.src('src/js/main.js')
        .pipe(browserify({transform: 'reactify'}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('clean', function (cb) {
    del(['dist/**/*.*'], cb);
});

gulp.task('copy', function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/index.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('default', ['clean', 'browserify', 'copy']);

gulp.task('dev', ['watch', 'serve']);

gulp.task('watch', function () {
    gulp.watch('src/**/*.*', ['default'], reload);
});