# Atomic SCSS Starter Kit

Scss starter kit emphasizing atomic styles but not preventing the use of BEM or OOCSS techniques for overriding.

## How to use

* Clone this repo with `git clone https://github.com/internetErik/atomic-scss-starter-kit.git`
* run `npm install` in the base directory
* run `gulp watch` to build scss files.
* run `node` or `nodemon` (which will start `app.js`) to start express

## What's Included?

* [Atomic styles](http://www.github.com/internetErik/atomic-scss) (similar to [acss](http://acss.io/), but all predefined styles)
  * Includes helper styles (styles for fixing common problems, or adding common functionality)
* CSS [Reset](http://meyerweb.com/eric/tools/css/reset/) (Eric Meyer, modified) or [Normalize](https://necolas.github.io/normalize.css/) 
    * Comment out what you don't want
* [Susy](http://susy.oddbird.net/) grid system
* [Font Awesome](http://fontawesome.io/)
* Boilerplate organization for scss files
* [Express](https://expressjs.com/) server
    * [Handlebars](http://handlebarsjs.com/) templates
* [Gulp](http://gulpjs.com/) build system with [autoprefixer](https://autoprefixer.github.io/), [libsass](http://sass-lang.com/libsass) (via gulp-sass), [uncss](https://github.com/giakki/uncss) (via gulp-uncss)
* Some boilerplate pages (handlebars layout, index, routing)

## Why?

This repository serves a few purposes.

* A place to maintain a general purpose atomic css style sheet
* A simple starter kit for style guides, prototypes
* An educational tool for practicing atomic styling