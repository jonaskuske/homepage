/* eslint-disable no-undef, no-unused-vars */

const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const root = dir => path.resolve(__dirname, '../', dir);

// config.entry.push('./src/lib/sw-config.js');

config.plugins.push(
  new ManifestPlugin({
    fileName: 'asset-manifest.json',
    filter: ({ name }) => !name.includes('htaccess')
  }),
  new CleanWebpackPlugin(['dist'], { root: root('.') }),
  new webpack.ProvidePlugin({
    h: ['hyperapp', 'h']
  }),
  new UglifyJsPlugin(),
  new HtmlWebpackPlugin({
    title: 'Portfolio | Jonas Kuske',
    template: root('index.html'),
    inject: true,
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeStyleLinkTypeAttributes: true,
      removeScriptTypeAttributes: true,
      removeAttributeQuotes: true
    },
    favicon: root('src/assets/images/favicon.ico')
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
        src: root('src/assets/images/Logo.png'),
        sizes: [96, 128, 192, 256, 512],
        destination: path.join('assets', 'icons'),
        ios: true
      }
    ]
  }),
  new CompressionWebpackPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css)$/,
    threshold: 3000,
    minRatio: 0.8
  })
  // new WorkboxPlugin({
  //   globDirectory: root('dist'),
  //   globPatterns: ['**/*.{html,js,json,jpg}'],
  //   swDest: root('dist/service-worker.js'),
  //   clientsClaim: true,
  //   skipWaiting: true,
  //   runtimeCaching: [
  //     {
  //       urlPattern: /https?:\/\/(i\.imgur\.com|fonts\.gstatic\.com|fonts\.googleapis\.com).+/,
  //       handler: 'staleWhileRevalidate'
  //     }
  //   ]
  // })
);

module.exports = config;