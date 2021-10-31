'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

const clearDist = function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
};

const buildFonts = function fonts() {
    return gulp.src("./src/font/**/*")
               .pipe(gulp.dest("./dist/font/"))
               .pipe(browserSync.stream());
}

const minifyImages = async () => {
    const files = await imagemin(['./src/img/**/*.{jpg,png}'], {
        destination: 'dist/img',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
    console.log(files);
}

const buildCSS = function() {
    return gulp.src("src/**/*.scss")
        .pipe(sass())
        .pipe(concat('styles-min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 2 versions"],
            cascade: false
        }))
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
};

const buildJS = function() {
    return gulp.src("src/js/**/*.js")
        .pipe(concat('scripts.js'))
        .pipe(minify({noSource: true}))
        .pipe(uglify({toplevel: true}))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.stream());
    };

const startSync = function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('./src/font/**/*', buildFonts);
    gulp.watch('./src/img/**/*.{jpg,png}', minifyImages);
    gulp.watch("src/**/*.scss", buildCSS);
    gulp.watch("src/**/*.js", buildJS);
    gulp.watch("index.html").on('change', browserSync.reload);
}

gulp.task('clean', clearDist);
gulp.task("images", minifyImages);
gulp.task("fonts", buildFonts);
gulp.task('sass', buildCSS);
gulp.task('scripts', buildJS)
gulp.task('sync', startSync);;

gulp.task('build', gulp.series(clearDist, gulp.parallel(minifyImages, buildFonts, buildCSS, buildJS)));
gulp.task('dev', gulp.series('build', startSync));