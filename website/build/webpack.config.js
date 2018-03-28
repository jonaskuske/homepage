/* eslint-disable no-undef, no-unused-vars */

const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = dir => path.resolve(__dirname, '../', dir);

const config = {
  entry: ['./src/main.js'],
  output: {
    path: root('dist'),
    filename: 'main.[hash].js',
    chunkFilename: '[name].bundle.[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': root('src'),
      '@@': root('src/components'),
      '@img': root('src/assets/images'),
      '@projects': root('src/assets/projects')
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|service-worker\.js/,
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
            quality: 90
          },
          pngquant: {
            quality: '70-85',
            speed: 1
          }
        }
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        loader: 'file-loader',
        options: {
          context: root('src/assets'),
          name: 'assets/[path][name].[ext]'
        }
      },
      {
        test: /\.json/,
        loader: 'file-loader?name=[name].[hash].[ext]'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: root('static/*'), to: root('dist'), flatten: true }])
  ],
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;