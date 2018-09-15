/* eslint-disable no-undef, no-unused-vars */

const path = require('path')
const fs = require('fs')
const webpack = require('webpack')

const root = dir => path.resolve(__dirname, '../', dir)

const config = {
  entry: ['./src/main.js'],
  output: {
    path: root('dist'),
    filename: 'main.[hash:6].js',
    chunkFilename: '[name].bundle.[chunkhash:6].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': root('src'),
      '@@': root('src/components'),
      '@img': root('src/assets/images'),
      '@icon': root('src/assets/icons'),
      '@projects': root('src/assets/projects'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        loader: 'file-loader',
        options: {
          context: root('src/assets'),
          name: 'assets/[path][name].[ext]',
        },
      },
      {
        test: /\.json/,
        loader: 'file-loader?name=[name].[hash].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      h: ['hyperapp', 'h'],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
}

module.exports = config
