/* ---------------------------*/
/* modules                    */
/* ---------------------------*/

const VueLoaderPlugin = require('vue-loader/lib/plugin');


/* ---------------------------*/
/*  config                    */
/* ---------------------------*/

const config = {
  directory: {
    assets: '../../' + '_Assets/',
    develops: '../../' + '_Develops/',
    resources: '../' + 'Resources/'
  },
  module: {
    target: 'web',
    mode: 'development', // 'production' に設定することで出力するjsを圧縮
  }
}

/**** !★ webpack moduleではディレクトリ指定に ``絶対パス`` を通す必要がある ★! ****/
const absolutePath = require('path');
const path = {
  entry: absolutePath.resolve(__dirname, `${config.directory.resources}js/index.js`),
  dest: absolutePath.resolve(__dirname, config.directory.assets), // 出力するディレクトリ
  destname: 'index.js', // 出力するファイル名
}


/* ---------------------------*/
/*  exports                   */
/* ---------------------------*/

module.exports = {
  target: config.module.target,
  mode: config.module.mode, 
  entry: path.entry,
  output: {
    filename: path.destname,
    path: path.dest
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions:{
                plugins: [
                  [
                    'autoprefixer',
                    {
                      grid: true
                    },
                  ],
                ]
              }
            }
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                absolutePath.resolve(__dirname, `${config.directory.resources}scss/_setting.scss`),
                absolutePath.resolve(__dirname, `${config.directory.resources}scss/_mixin.scss`),
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // babelを通さないディレクトリ
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { modules: false }]]
          }
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};