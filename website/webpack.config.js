/* eslint-disable no-undef, no-unused-vars */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
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
        loader: 'file-loader?name=[name].[hash].[ext]'
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
    new HtmlWebpackPlugin({
      title: 'Portfolio | Jonas Kuske',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.ProvidePlugin({
      h: ['hyperapp', 'h']
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};

if (process.env.NODE_ENV === 'production') module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
else module.exports.plugins.push(new webpack.NamedModulesPlugin());