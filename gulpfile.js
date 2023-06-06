const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


//Função de compilar o arquivo SASS
function SASS(){
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/styles'));
}

//Compilar Imagens
function MinImage(){
    return gulp.src('./source/images/*')
    .pipe(imagemin()).pipe(gulp.dest('./dist/images'));
}

//Comprimir o JavaScript
function CompressJs(){
    return gulp.src('./source/scripts/*.js').pipe(uglify()).pipe(gulp.dest('./dist/scripts/'))
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(SASS));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(MinImage));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(CompressJs));
}