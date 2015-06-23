var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uncss = require('gulp-uncss'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
    'sass': './public/stylesheets/**/*.scss',
    'css': './public/stylesheets/',
    'blitzCss': './public/stylesheets/blitz.css',
    'allCss': './public/stylesheets/*.css',
    'hbs': ['./views/**/*.hbs', './views/*.hbs'],
    'builtHtml': './assembled_hbs/',
    'html': './assembled_hbs/site.html'
};

gulp.task('assemble', function () {
  return gulp.src(paths.hbs)
      .pipe(concat('site.html'))
      .pipe(gulp.dest(paths.builtHtml));
});

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

gulp.task('sass', function(){
  return gulp.src(paths.sass)
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'IE 9']}))
    .pipe(gulp.dest(paths.css));
});

gulp.task('buildCss', ['assemble','sass','uncss'], function(){
  return gulp.src(paths.allCss)
    .pipe(concat('site.css'))
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function() {

    gulp.start('buildCss');
    gulp.watch(paths.sass, ['buildCss']);

});