var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var pump = require('pump');
var webserver = require('gulp-webserver');
var copy = require('copy');
var imagemin = require('gulp-imagemin');


gulp.task('imgmin', () =>
	gulp.src('./app/images/**')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/app/images'))
);


gulp.task('compress', function (cb) {
  pump([
        gulp.src('./app/js/**/*.js'),
        uglify(),
        gulp.dest('./dist/app/js')
    ],
    cb
  );
});

gulp.task('minify-css', function() {
  return gulp.src('./app/css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/app/css'));
});

gulp.task('sass', function () {
  return gulp.src('./app/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});


gulp.task('templates', function () {
  gulp.src('./app/views/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'));
});


gulp.task('watch', function() {
  gulp.watch('./app/**/*.js', ['compress']);
  gulp.watch('./app/**/*.scss', ['sass']);
  gulp.watch('./app/**/*.css', ['minify-css']);
  gulp.watch('./app/views/**/*.jade', ['templates']);
});


gulp.task('start', function () {
  gulp.src('./dist')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('copy', function(){

     gulp.src('./bootstrap/**/*.*')
    .pipe(gulp.dest('./dist/app/'));
});

gulp.task('default', ['build' , 'watch' , 'start']);
gulp.task('build', ['minify-css' , 'sass' , 'compress' , 'templates', 'imgmin']);
gulp.task('strap', ['copy']);
