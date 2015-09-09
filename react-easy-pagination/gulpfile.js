var gulp = require('gulp');
var babel = require('gulp-babel');
var shell = require('gulp-shell')

gulp.task('webpack',function(){
	return shell.task('webpack --config webpack.config.js')();
});

gulp.task('babel',function(){	
	return gulp.src('./src/*.jsx')
		.pipe(babel())
		.pipe(gulp.dest('./dist'));
});

gulp.task('copy',function(){
	return gulp.src('./src/**/*.css')
		.pipe(gulp.dest('./dist'))
});

gulp.task('build',['babel','copy']);

gulp.task('watch',function (){
	gulp.watch([
		'**/*.*',
		'!node_modules',
		'!node_modules/**/*.*',
		'!dist',
		'!dist/**/*.*',
		'!test',
		'!test/**/*.*'
	],['webpack']);
});

gulp.task('default',['webpack','watch']);