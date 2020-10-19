/* ---------------------------*/
/*  modules                   */
/* ---------------------------*/
const { src, dest, watch, lastRun, parallel, series} = require('gulp');
const sass = require('gulp-sass');

const postCss = require('gulp-postcss');
const tailwindcss = require('tailwindcss'); 
const autoprefixer = require('autoprefixer');
const tailwindConfig = require("./tailwind.config.js");


/* ---------------------------*/
/*  config                    */
/* ---------------------------*/

const config = {
  directory: {
    assets: 'assets/',
    static: 'static/'
  }
}

const path = {
  css: 'static/index.css',
  scss: 'assets/scss/',
  scssIndex: 'assets/scss/index.scss',
  vue: ['pages/', 'layouts/', 'components/'],
}
const folder = {
  css: 'static/',
}


/* ---------------------------*/
/*  css -> scss               */
/* ---------------------------*/

const scss = (done) => {
  const plugins = [
    tailwindcss(tailwindConfig),
    autoprefixer()
  ];
  src(path.scssIndex)
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
    tailwindcss(tailwindConfig),
    autoprefixer()
  ];
  src(path.css, {
    base: config.directory.static
  })
  .pipe(postCss(plugins))
  .pipe(dest(folder.css)); 
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
exports.build = series(scss, css)
exports.scss = scss
exports.css = css
exports.dev = () => {
  watch(path.scss, scss)
  watch(path.vue, scss)
}
