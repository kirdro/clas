/**
 * Created by kirilldrozdov on 12.03.17.
 */
'use strict'

var gulp = require('gulp');
// var livereload = require('gulp-livereload');
// var browserify = require('gulp-browserify');
// var browserify = require('gulp-browserify-globs');
var browserify = require('browserify');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var cssimport = require("gulp-cssimport");
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var remember = require('gulp-remember');
var path = require('path');
var cached = require('gulp-cached');
var react = require('gulp-react');
var reactify = require('reactify');
var browserSync = require('browser-sync').create();
var notify = require("gulp-notify");
var combine = require('stream-combiner2').obj;
var source = require("vinyl-source-stream");
var multipipe = require('multipipe');
var plumber = require('gulp-plumber');
var historyApiFallback = require('connect-history-api-fallback');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var babel = require('gulp-babel');
var rev = require('gulp-rev-mtime');
var minify = require('gulp-babel-minify');
var cssmin = require('gulp-cssmin');
var minifyGulp = require('gulp-minify');
var babelify = require("babelify");
var es2015 = require('babel-preset-es2015');
var es2016 = require('babel-preset-es2016');
var es2017 = require('babel-preset-es2017');
var babelReact = require('babel-preset-react');

gulp.task('copyHtml', function() {
    return gulp.src('src/*.html')
        .pipe(cached('copyHtml'))
        .pipe(remember('copyHtml'))
        .pipe(debug({
            title: 'src'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(debug({
            title: 'dest'
        }));
});


gulp.task('browserify2', function() {
    return browserify('src/js/Main.jsx', {
        debug: true,
        extensions: ['.jsx', '.js']
    }).transform(babelify.configure({
        presets: [es2015, babelReact, es2016, es2017]
    })).bundle()
        .on('error', notify.onError(function(err) {
            return {
                title: "Gulp",
                message: err.message,
                sound: "Beep",
                subTitle: err.name
            };
        }))
        .pipe(source('main.js'))
        .pipe(buffer())
        // .pipe(jsmin())
        .pipe(gulp.dest('dist/js'));
    // 	gulp.src('src/js/Main.jsx')
    // 	.pipe(browserify({transform:['reactify'],
    // extensions: ['.js']}))
    // 	.pipe(concat('main2.js'))
    // 	.pipe(gulp.dest('public'))
    // .pipe(livereload());
});
gulp.task('browserify3', function() {
    return browserify('src/js/Main.jsx', {
        debug: true,
        extensions: ['.jsx', '.js']
    }).transform(babelify.configure({
        presets: [es2015, babelReact, es2016, es2017]
    })).bundle()
        .on('error', notify.onError(function(err) {
            return {
                title: "Gulp",
                message: err.message,
                sound: "Beep",
                subTitle: err.name
            };
        }))
        .pipe(source('main.js'))
        .pipe(buffer())
        // .pipe(jsmin())
        .pipe(gulp.dest('dist/static/js'));
    // 	gulp.src('src/js/Main.jsx')
    // 	.pipe(browserify({transform:['reactify'],
    // extensions: ['.js']}))
    // 	.pipe(concat('main2.js'))
    // 	.pipe(gulp.dest('public'))
    // .pipe(livereload());
});

gulp.task('styles', function() {
    return gulp.src('src/css/**/*.*')
        .pipe(cached('styles'))
        .pipe(sourcemaps.init())
        .pipe(remember('styles'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(debug({
            title: 'dest'
        }));
})
gulp.task('styles2', function() {
    return gulp.src('src/css/**/*.*')
        .pipe(cached('styles'))
        .pipe(sourcemaps.init())
        .pipe(remember('styles'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/static/css'))
        .pipe(debug({
            title: 'dest'
        }));
})
gulp.task('browserifyProd', function() {
    return browserify('src/js/Main.jsx', {
        debug: false,
        extensions: ['.jsx', '.js']
    }).transform(babelify.configure({
        presets: [["es2016"], ["es2015", {
            "loose": true,
            "modules": false
        }], ["react"]]
    }))
        .bundle()
        .on('error', notify.onError(function(err) {
            return {
                title: "Gulp",
                message: err.message,
                sound: "Beep",
                subTitle: err.name
            };
        }))
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(minifyGulp())
        .pipe(gulp.dest('dist/js'));
    // 	gulp.src('src/js/Main.jsx')
    // 	.pipe(browserify({transform:['reactify'],
    // extensions: ['.js']}))
    // 	.pipe(concat('main2.js'))
    // 	.pipe(gulp.dest('public'))
    // .pipe(livereload());
});
gulp.task('copyAdmin', function () {
    return gulp.src('src/admin/**/*.*')
        .pipe(cached('copyAdmin'))
        .pipe(remember('copyAdmin'))
        .pipe(gulp.dest('dist/admin'));
});
gulp.task('stylesProd', function() {
    return gulp.src('src/css/**/*.*')
        .pipe(cached('styles'))
        .pipe(sourcemaps.init())
        .pipe(remember('styles'))
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        // .pipe(minify({minify:true}))
        .pipe(gulp.dest('dist/css'))
        .pipe(debug({
            title: 'dest'
        }));
})

gulp.task('copyImg', function() {
    return gulp.src('src/img/**/*.*')
        .pipe(cached('copyImg'))
        .pipe(remember('copyImg'))
        .pipe(gulp.dest('dist/img'));
});
gulp.task('copyImg2', function() {
    return gulp.src('src/img/**/*.*')
        .pipe(cached('copyImg'))
        .pipe(remember('copyImg'))
        .pipe(gulp.dest('dist/static/img'));
});

gulp.task('copyLib', function() {
    return gulp.src('src/scripts/**/*.*')
        .pipe(cached('copyLib'))
        .pipe(remember('copyLib'))
        .pipe(gulp.dest('dist/scripts'));
});
gulp.task('copyLib2', function() {
    return gulp.src('src/scripts/**/*.*')
        .pipe(cached('copyLib'))
        .pipe(remember('copyLib'))
        .pipe(gulp.dest('dist/static/scripts'));
});

gulp.task('clean', function() {
    return del('dist');
})

gulp.task('rev2', function () {
    return gulp.src('dist/index.html')
        .pipe(rev({
            'cwd': 'dist/',
            'suffix': 'rev',
            'fileTypes': ['css', 'js']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "dist",
            middleware: [historyApiFallback()]
        }
    });
    browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function() {
    gulp.watch('src/*.*', gulp.series('copyHtml')).on('unlink', function(filepath) {
        remember.forget('copyHtml', path.resolve(filepath));
        delete cached.caches.copyHtml[path.resolve(filepath)];
    });
    gulp.watch('src/css/**/*.*', gulp.series('styles2')).on('unlink', function(filepath) {
        remember.forget('styles2', path.resolve(filepath));
        delete cached.caches.styles2[path.resolve(filepath)];
    });
    gulp.watch('src/css/**/*.*', gulp.series('styles')).on('unlink', function(filepath) {
        remember.forget('styles', path.resolve(filepath));
        delete cached.caches.styles[path.resolve(filepath)];
    });
    gulp.watch('src/img/**/*.*', gulp.series('copyImg2')).on('unlink', function(filepath) {
        remember.forget('copyImg2', path.resolve(filepath));
        delete cached.caches.copyImg2[path.resolve(filepath)];
    });
    gulp.watch('src/img/**/*.*', gulp.series('copyImg')).on('unlink', function(filepath) {
        remember.forget('copyImg', path.resolve(filepath));
        delete cached.caches.copyImg[path.resolve(filepath)];
    });
    gulp.watch('src/js/**/*.*', gulp.series('browserify3')).on('unlink', function(filepath) {
        remember.forget('browserify3', path.resolve(filepath));
        delete cached.caches.browserify3[path.resolve(filepath)];
    });
    gulp.watch('src/js/**/*.*', gulp.series('browserify2')).on('unlink', function(filepath) {
        remember.forget('browserify2', path.resolve(filepath));
        delete cached.caches.browserify2[path.resolve(filepath)];
    });
    gulp.watch('src/js/**/*.*', gulp.series('rev2')).on('unlink', function(filepath) {
        remember.forget('rev2', path.resolve(filepath));
        delete cached.caches.rev2[path.resolve(filepath)];
    });
    gulp.watch('src/css/**/*.*', gulp.series('rev2')).on('unlink', function(filepath) {
        remember.forget('rev2', path.resolve(filepath));
        delete cached.caches.rev2[path.resolve(filepath)];
    });
    gulp.watch('src/scripts/**/*.*', gulp.series('copyLib2')).on('unlink', function(filepath) {
        remember.forget('copyLib2', path.resolve(filepath));
        delete cached.caches.copyLib2[path.resolve(filepath)];
    });
    gulp.watch('src/scripts/**/*.*', gulp.series('copyLib')).on('unlink', function(filepath) {
        remember.forget('copyLib', path.resolve(filepath));
        delete cached.caches.copyLib[path.resolve(filepath)];
    });
})


gulp.task('default', gulp.series('clean', gulp.parallel('copyHtml', 'styles', 'styles2', 'copyImg','copyImg2', 'browserify2','browserify3', 'copyLib','copyLib2', 'copyAdmin'), gulp.parallel('serve','rev2', 'watch')));
gulp.task('prod', gulp.series('clean', [gulp.parallel('copyHtml', 'stylesProd', 'copyImg',  'browserifyProd', 'copyLib'), gulp.parallel('serve', 'rev2')]));
