var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	file = {
		src: 'pager.js',
		build: 'pager.min.js'
	};

gulp.task('build', function () {
	gulp.src(file.src)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(uglify())
		.pipe(rename(file.build))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
	gulp.watch([file.src], ['build']);
	console.log('Press Ctrl + C to stop watching');
});

gulp.task('default', ['build']);
