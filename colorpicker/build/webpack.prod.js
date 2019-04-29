/* eslint-disable no-undef */

const path = require('path')
const config = require('./webpack.base')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const dotenvWebpack = require('dotenv-webpack')

const root = dir => path.resolve(__dirname, '../', dir)

config.output.publicPath = '/colorpicker/'

config.mode = 'production'

config.plugins.push(
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin([
    { from: root('static'), to: root('dist'), flatten: true },
  ]),
  new CompressionWebpackPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css)$/,
    threshold: 3000,
    minRatio: 0.8,
  }),
  new dotenvWebpack({ path: root('../.env') }),
  new WebpackManifestPlugin({ fileName: 'build-manifest.json' }),
)

module.exports = config
