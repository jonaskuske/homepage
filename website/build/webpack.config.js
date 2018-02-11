/* eslint-disable no-undef, no-unused-vars */

const webpack = require('webpack');
const path = require('path');

const root = dir => path.resolve(__dirname, '../', dir);

const config = {
  entry: ['./src/main.js'],
  output: {
    path: root('dist'),
    filename: 'main.[hash].js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': root('src'),
      '@@': root('src/components'),
      '@img': root('src/assets/images')
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
        test: /\.(gif|png|jpe?g|svg)$/i,
        enforce: 'pre',
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 80
          }
        }
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        loader: 'file-loader?name=assets/images/[name].[ext]'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /\.json/,
        loader: 'file-loader?name=[name].[hash].[ext]'
      },
      {
        test: /\.htaccess$/,
        loader: 'file-loader?name=[name]'
      }
    ]
  },
  plugins: [],
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;