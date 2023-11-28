const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const flatten = require('gulp-flatten');
const replace = require('gulp-replace');

gulp.task('build', gulp.series(cleanTask, function buildTask() {
  return gulp.src('./src/**/*.js')
    .pipe(flatten())
    .pipe(replace("from './lib/", "from './"))
    .pipe(replace("from './in-and-out/", "from './"))
    .pipe(replace("from '../RevealBase';", "from './RevealBase';"))
    .pipe(replace("from '../lib/globals';", "from './globals';"))
    .pipe(replace("from '../lib/wrap';", "from './wrap';"))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('./'));
}));


gulp.task('clean', function cleanTask() {
  return gulp.src([
    './index.js',
    './RevealBase.js',
    './hamburger.js',
    './withReveal.js',
    './responsive.js',
    './HamburgerIcon.js',
    './makeCarousel.js',
    './swipedetect.js',
    './Animation.js',
    './Stepper.js',
    './Step.js',
    './globals.js',
    './debounce.js',
    './throttle.js',
    './Bounce.js',
    './Fade.js',
    './Flash.js',
    './HeadShake.js',
    './Jello.js',
    './Jump.js',
    './Pulse.js',
    './Roll.js',
    './RubberBand.js',
    './Shake.js',
    './Slide.js',
    './Swing.js',
    './Tada.js',
    './Wobble.js',
    './Flip.js',
    './Reveal.js',
    './Rotate.js',
    './LightSpeed.js',
    './Spin.js',
    './Zoom.js',
    './wrap.js',
  ], { read: false, allowEmpty: true })
    .pipe(clean());
});

function cleanTask(done) {
  return gulp.series('clean')(done);
}

gulp.task('default', gulp.series('build'));
