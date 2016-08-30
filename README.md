# scssBlitz

Scss starter kit emphasizing atomic styles but not preventing the use of BEM or OOCSS techniques for overriding.

## How to use

* Clone this repo
* run `npm install` in the base directory
* run `gulp watch`
* run `node app` or `nodemon app`

## What's Included?

* [Express](https://expressjs.com/) server
    * [Handlebars](http://handlebarsjs.com/) templates
* [Gulp](http://gulpjs.com/) build system with [autoprefixer](https://autoprefixer.github.io/), [libsass](http://sass-lang.com/libsass) (via gulp-sass), [uncss](https://github.com/giakki/uncss) (via gulp-uncss)
* Some boilerplate pages (handlebars layout, index, routing)
* CSS [Reset](http://meyerweb.com/eric/tools/css/reset/) (Eric Meyer, modified) or [Normalize](https://necolas.github.io/normalize.css/) 
    * Comment out what you don't want
* Atomic styles (see _atomic.scss) (similar to [acss](http://acss.io/))
* Helper styles (see _helpers.scss)
    * Styles for fixing common problems, or adding common functionality
* [Susy](http://susy.oddbird.net/) grid system
* [Font Awesome](http://fontawesome.io/)
* Boilerplate organization for scss files
