/**
 * Created by andream16 on 03.01.17.
 */
var gulp        = require('gulp'),
    del         = require('del'),
    runSequence = require('run-sequence'),
    concat      = require('gulp-concat'),
    inject      = require('gulp-inject'),
    jsHint      = require('gulp-jshint'),
    serve       = require('gulp-serve');

var config = require('./gulp/gulp.config');

//Default Task
gulp.task('default', function (callback) {
    runSequence('build', 'watch', 'serve', callback);
});

gulp.task('serve', serve('build'));

gulp.task('build', function (callback) {
    runSequence('clean', 'copy-build', 'inject', callback);
});

gulp.task('inject', function () {
    return gulp.src('./src/index.html')
        .pipe(inject( gulp.src(config.app_files.tpl_src), {ignorePath : 'build'}))
        .pipe(gulp.dest(config.build_dir));
});

// Copies all the files into build
gulp.task('copy-build', function (callback) {
  runSequence('copy-assets', 'copy-js', 'copy-app-js', 'copy-json', 'copy-vendor-js', 'copy-html', 'copy-tpl', 'copy-img', callback);
});

gulp.task('clean', function () {
    //Always delete build directory
    return del(config.build_dir);
});

gulp.task('watch', function () {
    gulp.watch(config.app_files.js, ['lint', 'build']);
});

gulp.task('lint', function () {
    return gulp.src(config.app_files.js)
        .pipe(jsHint())
        .pipe(jsHint.reporter('default'))
});

gulp.task('copy-assets', function () {
    return gulp.src('./vendors/**/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./build/assets'));
});

gulp.task('copy-js', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./build/js'));
});

gulp.task('copy-app-js', function () {
    return gulp.src('./src/js/app/*.js')
        .pipe(gulp.dest('./build/js/app'));
});

gulp.task('copy-json', function () {
    return gulp.src('./src/js/**/*.json')
        .pipe(gulp.dest('./build/js/i18n'));
});

gulp.task('copy-vendor-js', function () {
    return gulp.src('./vendors/**/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./build/vendors'));
});

gulp.task('copy-html', function () {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest(config.build_dir));
});

gulp.task('copy-tpl', function () {
    return gulp.src('./src/**/*.tpl')
        .pipe(gulp.dest('./build/templates'));
});

gulp.task('copy-img', function () {
    return gulp.src('./src/img/*')
        .pipe(gulp.dest('./build/img'));
});
