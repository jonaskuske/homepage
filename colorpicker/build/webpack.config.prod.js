/* eslint-disable no-undef */

const path = require('path')
const config = require('./webpack.config')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

const root = dir => path.resolve(__dirname, '../', dir)

config.plugins.push(
  new CleanWebpackPlugin([root('dist')], { root: root('.'), verbose: false }),
  new CopyWebpackPlugin([
    { from: root('static'), to: root('dist'), flatten: true },
  ]),
  new CompressionWebpackPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css)$/,
    threshold: 3000,
    minRatio: 0.8,
  }),
  new WebpackManifestPlugin({ fileName: 'build-manifest.json' }),
)

module.exports = config
