/* eslint-disable no-undef */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ProgressPlugin = require('progress-webpack-plugin')

const root = dir => path.resolve(__dirname, '../', dir)

const config = {
  mode: 'production',
  node: {
    fs: 'empty',
  },
  stats: {
    excludeAssets: /\.(png|json|ico|webmanifest)$/,
    modules: false,
    hash: false,
    children: false,
  },
  performance: {
    assetFilter: filename => !/(\.map$)|instascan/.test(filename),
  },
  output: {
    filename: 'main.[hash:6].js',
    chunkFilename: '[name].[chunkhash:6].js',
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      '@': root('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, root('src/lib/instascan.js')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        loader: 'file-loader?name=[name].[hash:6].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: root('index.html'),
      favicon: root('assets/favicon.ico'),
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: true,
        removeAttributeQuotes: true,
      },
    }),
    new ProgressPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],
}

module.exports = config
