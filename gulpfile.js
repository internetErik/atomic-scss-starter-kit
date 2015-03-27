var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uncss = require('gulp-uncss'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function(){
	return gulp.src('./styles/**/*.scss')
		.pipe(sass({errLogToConsole: true}))
        // use this when building for production
        // .pipe(uncss({
        //     html: ['index.html']
        // }))
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('./styles'));
});