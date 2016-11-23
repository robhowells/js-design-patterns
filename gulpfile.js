var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	paths = {
		js: {
			src: ['./js/src/vendors/*.js', './js/src/components/*.js', './js/src/*.js'],
			dist: './js/dist',
			lint: ['./js/src/components/*.js', './js/src/*.js']
		}
	};

gulp.task('js:lint', function() {
	return gulp.src(paths.js.lint)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
});

gulp.task('js:dev', function() {
	return gulp.src(paths.js.src)
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.js.dist))
});

gulp.task('js:build', function() {
	return gulp.src(paths.js.src)
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.js.dist))
});

gulp.task('watch', function() {
	gulp.watch(paths.js.src, ['js:lint', 'js:dev']);
});

gulp.task('build', ['js:build'], function() {});
