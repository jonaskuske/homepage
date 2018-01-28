/* eslint-disable no-undef, no-unused-vars */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');


module.exports = {
  entry: ['promise-polyfill/src/polyfill', 'whatwg-fetch', './src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@@': path.resolve(__dirname, 'src/components'),
      '@img': path.resolve(__dirname, 'src/assets/images')
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader?name=assets/images/[name].[ext]'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /\.json/,
        loader: 'file-loader?name=[name].[hash].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Portfolio | Jonas Kuske',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      favicon: path.resolve(__dirname, './src/assets/images/favicon.ico')
    }),
    new webpack.ProvidePlugin({
      h: ['hyperapp', 'h']
    }),
    new WebpackPwaManifest({
      short_name: 'jk Portfolio',
      name: 'Portfolio | Jonas Kuske',
      description: 'Portfolio von Jonas Kuske, Designer & Developer.',
      start_url: '/?utm_source=homescreen',
      display: 'standalone',
      theme_color: '#585858',
      background_color: '#f0f0f0',
      dir: 'ltr',
      ios: true,
      icons: [
        {
          src: path.resolve('src/assets/images/Logo.png'),
          sizes: [96, 128, 192, 256, 512],
          destination: path.join('assets', 'icons'),
          ios: true
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};

if (process.env.NODE_ENV === 'production') module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin()
);
else module.exports.plugins.push(new webpack.NamedModulesPlugin());