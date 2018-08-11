/* eslint-disable no-undef, no-unused-vars */

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const root = dir => path.resolve(__dirname, '../', dir);

const babelConfig = JSON.parse(fs.readFileSync(root('.babelrc')));

const config = {
  entry: ['./src/main.js'],
  output: {
    path: root('dist'),
    filename: 'main.[hash].js',
    chunkFilename: '[name].bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': root('src'),
      '@@': root('src/components'),
      '@img': root('src/assets/images'),
      '@icon': root('src/assets/icons'),
      '@projects': root('src/assets/projects')
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\\miniswipe)/,
        loader: 'babel-loader',
        options: { ...babelConfig, cacheDirectory: true }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   enforce: 'pre',
      //   loader: 'image-webpack-loader',
      //   options: {
      //     mozjpeg: {
      //       progressive: true,
      //       quality: 100
      //     },
      //     pngquant: {
      //       quality: '70-85',
      //       speed: 1
      //     }
      //   }
      // },
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
    new webpack.ProvidePlugin({
      h: ['hyperapp', 'h']
    }),
  ],
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;