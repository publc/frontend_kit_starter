const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const config = require('./config');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  mode: config.appMode,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:base64:8]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
