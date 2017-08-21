/**
 * 组件安装
 * npm install gulp-util gulp-imagemin gulp-less gulp-minify-css gulp-jshint gulp-uglify gulp-rename gulp-concat gulp-clean gulp-livereload tiny-lr gulp-autoprefixer gulp-rev-append gulp-shell amd-optimize fs path browser-sync del --save-dev
 */

// 引入 gulp及组件
var gulp = require('gulp'), //基础库

    path = require('path'),
    runSequence = require('run-sequence'), //按顺序执行

    browserSync = require('browser-sync').create(); //页面实时刷新
//端口热更新------------------------------------------------------------------------------------------------------------------------------------------
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./",
        },
        port: 3003
    });
});

gulp.task('default', ['watch']);