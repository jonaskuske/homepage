const path = require('path')
const config = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const ManifestPlugin = require('webpack-manifest-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const dotenvWebpack = require('dotenv-webpack')

const root = dir => path.resolve(__dirname, '../', dir)

config.mode = 'production'

config.entry.push(root('src/registerServiceWorker.js'))

config.plugins.push(
  new ManifestPlugin({
    fileName: 'asset-manifest.json',
    filter: ({ name }) => !name.includes('htaccess') && !name.endsWith('gz'),
  }),
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin([{ from: root('static'), to: root('dist') }]),
  new HtmlWebpackPlugin({
    title: 'Portfolio | Jonas Kuske',
    template: root('index.html'),
    inject: true,
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeStyleLinkTypeAttributes: true,
      removeScriptTypeAttributes: true,
      removeAttributeQuotes: true,
    },
    favicon: root('src/assets/images/favicon.ico'),
  }),
  new WebpackPwaManifest({
    short_name: 'Portfolio',
    name: 'Portfolio | Jonas Kuske',
    description: 'Portfolio von Jonas Kuske, Designer & Developer.',
    start_url: '/?utm_source=homescreen',
    display: 'standalone',
    theme_color: '#585858',
    background_color: '#f0f0f0',
    dir: 'ltr',
    ios: true,
    fingerprints: false,
    icons: [
      {
        src: root('src/assets/icons/icon.png'),
        sizes: [36, 48, 72, 96, 128, 144, 192, 256, 512, 1024],
        destination: path.join('assets', 'icons'),
        ios: false,
      },
    ],
  }),
  new CompressionWebpackPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css)$/,
    threshold: 3000,
    minRatio: 0.8,
  }),
  new dotenvWebpack({ path: root('../.env') }),
)

module.exports = config
