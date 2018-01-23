/* eslint-disable no-undef, no-unused-vars */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
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
        loader: 'url-loader'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hyperapp Demo'
    }),
    new webpack.ProvidePlugin({
      h: ['hyperapp', 'h']
    })
  ]
};

if (process.env.NODE_ENV === 'production') module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
else module.exports.plugins.push(new webpack.NamedModulesPlugin());