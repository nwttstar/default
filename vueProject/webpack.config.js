/* ---------------------------*/
/*  config                    */
/* ---------------------------*/

const config = {
  directory: {
    assets: '_assets/',
    resources: '_resources/'
  },
  module: {
    target: 'web',
    mode: 'development', // 'production' に設定することで出力するjsを圧縮
  }
}

const enabledSourceMap = config.module.mode === "development"; // 開発モードではsauceマップを有効化

/**** !★ webpack moduleではディレクトリ指定に ``絶対パス`` を通す必要がある ★! ****/
const absolutePath = require('path');
const path = {
  entry: absolutePath.resolve(__dirname, `${config.directory.resources}js/index.js`),
  dest: absolutePath.resolve(__dirname, config.directory.assets), // 出力するディレクトリ
  destname: 'index.js', // 出力するファイル名
}
/* ---------------------------*/
/* modules                    */
/* ---------------------------*/

const VueLoaderPlugin = require('vue-loader/lib/plugin');

/* ---------------------------*/
/*  exports                   */
/* ---------------------------*/

module.exports = {
  target: config.module.target,
  mode: config.module.mode,
  watchOptions: {
    ignored: ['/node_modules/', '/_assets/']
  },
  cache: { // キャッシュで二回目以降のコンパイルを高速化
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  entry: path.entry,
  output: {
    filename: path.destname,
    path: path.dest
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      vuex$: 'vuex/dist/vuex.esm.js',
      vuerouter$: 'vue-router/dist/vue-router.esm.js',
    }
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            sourceMap: enabledSourceMap
          },
        }
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
            }
          },
          'postcss-loader',
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap
            },
          },
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // babelを通さないディレクトリ
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { modules: false }]],
            sourceMap: enabledSourceMap
          }
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: ["url-loader"]
      }
    ]
  },
}
