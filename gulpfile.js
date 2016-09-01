var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    uncss        = require('gulp-uncss'),
    concat       = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
  'sass'     : './client/scss/**/*.scss',
  'css'      : './client/css/',
  'blitzCss' : './client/css/blitz.css',
  'allCss'   : './client/css/*.css',
  'hbs'      : ['./views/**/*.hbs', './views/*.hbs'],
  'builtHtml': './assembled_hbs/',
  'html'     : './assembled_hbs/site.html'
};

/**
 * Concats all the hbs files together so we have html files
 * to use with uncss
 */
gulp.task('assemble', function () {
  return gulp.src(paths.hbs)
    .pipe(concat('site.html'))
    .pipe(gulp.dest(paths.builtHtml));
});

/**
 * Uses the built html from 'assemble' to remove unused css
 * from blitz.css
 */
gulp.task('uncss', function(){
  return gulp.src(paths.blitzCss)
    .pipe(uncss({
        html: [paths.html],
        options: {
          ignoreSslErrors: 'true'
        }
    }))
    .pipe(gulp.dest(paths.css));
});

/**
 * Builds the scss files
 */
gulp.task('sass', function(){
  return gulp.src(paths.sass)
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(gulp.dest(paths.css));
});

/**
 * builds all the css, first assembling html and removing unused css
 */
gulp.task('buildCss', ['assemble','sass','uncss'], function(){
  return gulp.src(paths.allCss)
    .pipe(concat('site.css'))
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function() {
    gulp.start('buildCss');
    gulp.watch(paths.sass, ['buildCss']);
});