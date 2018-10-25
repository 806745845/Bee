let gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel')

//清除原文件夹
gulp.task('clean', function (cb) {
    del([
        'dist/**/*', 'es/**/*', 'lib/**/*'
    ], cb)
})

//将组件转换成lib模块形式
gulp.task('copy-lib', function(){
    return gulp.src('src/components/**/*.js').pipe(babel()).pipe(gulp.dest('lib'))
})
//编译scss，在相同目录生成css文件
gulp.task('scss', ['copy-lib'], function () {
    return gulp.src('src/components/css/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('src/components/css'))
})
//拷贝scss源文件
gulp.task('copy-scss', function () {
    return gulp.src('src/components/css/*.*').pipe(gulp.dest('lib/css'))
})

gulp.task('default', ['clean', 'scss', 'copy-scss'])