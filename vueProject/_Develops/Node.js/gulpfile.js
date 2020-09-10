/* ---------------------------*/
/*  modules                   */
/* ---------------------------*/
const { src, dest, watch, lastRun, parallel} = require('gulp');
const sass = require('gulp-sass');
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
}
const folder = {
  css: config.directory.assets,
  js: config.directory.assets
}


/* ---------------------------*/
/*  css -> scss               */
/* ---------------------------*/

const scss = (done) => {
  src(path.scssIndex, {
    since: lastRun(scss)
  })
  .pipe(sass())
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
}

// custom method
exports.build = parallel(scss, js)
exports.scss = scss
exports.js = js
exports.dev = () => {
  watch(path.scss, scss)
  watch(path.js, js)
}
