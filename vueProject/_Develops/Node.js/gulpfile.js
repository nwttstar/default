/* ---------------------------*/
/*  modules                   */
/* ---------------------------*/
const { src, dest, watch, lastRun, parallel, series} = require('gulp');
const sass = require('gulp-sass');

const postCss = require('gulp-postcss');
const tailwindcss = require('tailwindcss'); 
const autoprefixer = require('autoprefixer');
const tailwindConfig = require("./tailwind.config");

const webpack = require('webpack'); // bandle & babel
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config");

/* ---------------------------*/
/*  config                    */
/* ---------------------------*/

const config = {
  directory: {
    assets: '../../' + '_Assets/',
    develops: '../../' + '_Develops/',
    resources: '../' + 'Resources/'
  }
}

const path = {
  css: config.directory.assets + 'index.css',
  scss: config.directory.resources + 'scss/**',
  scssIndex: config.directory.resources + 'scss/index.scss',
  js: config.directory.resources + 'js/**',
  vue: config.directory.resources + 'vue/**',
}
const folder = {
  css: config.directory.assets,
  js: config.directory.assets
}


/* ---------------------------*/
/*  css -> scss               */
/* ---------------------------*/

const scss = (done) => {
  const plugins = [
    tailwindcss(tailwindConfig),
    autoprefixer()
  ];
  src(path.scssIndex, {
    base: config.directory.resources + 'scss/'
    })
  .pipe(sass())
  .pipe(postCss(plugins))
  .pipe(dest(folder.css)); 
  done();
}

/* ---------------------------*/
/*  postCss                   */
/* ---------------------------*/

const css = (done) => {
  const plugins = [
    tailwindcss(),
    autoprefixer()
  ];
  src(path.css, {
    base: config.directory.assets
  })
  .pipe(postCss(plugins))
  .pipe(dest(folder.css)); 
  done();
}

/* ---------------------------*/
/*  js bandle & babel to ES5  */
/* ---------------------------*/

const js = (done) => {
  webpackStream(webpackConfig, webpack)
  .on("error", function(e) {
    this.emit("end");
  })
  .pipe(dest(folder.js));
  done();
}


/* ---------------------------*/
/*  exports                   */
/* ---------------------------*/

exports.default = () => {
  watch(path.scss, scss)
  watch(path.vue, js)
}

// custom method
exports.build = parallel(scss, js)
exports.scss = scss
exports.css = css
exports.js = js
exports.dev = () => {
  watch(path.scss, scss)
  watch(path.js, js)
  watch(path.vue, parallel(js, scss))
}
