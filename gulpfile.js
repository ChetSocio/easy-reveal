var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var flatten = require('gulp-flatten');
var replace = require('gulp-replace');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

var cleanTask = function () {
  return gulp.src(['./dist'], { read: false, allowEmpty: true })
    .pipe(clean());
};

var buildTask = function () {
  return gulp.src('./src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
};

var copyDeclarationsTask = function () {
  return gulp.src('./src/**/*.d.ts')
    .pipe(gulp.dest('./dist'));
};

var defaultTask = gulp.series(cleanTask, gulp.parallel(buildTask, copyDeclarationsTask));

gulp.task('clean', cleanTask);
gulp.task('build', gulp.series(cleanTask, gulp.parallel(buildTask, copyDeclarationsTask)));
gulp.task('copy-declarations', copyDeclarationsTask);
gulp.task('default', defaultTask);

exports.cleanTask = cleanTask;
exports.buildTask = buildTask;
exports.copyDeclarationsTask = copyDeclarationsTask;
exports.defaultTask = defaultTask;

