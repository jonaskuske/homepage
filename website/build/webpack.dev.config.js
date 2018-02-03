/* eslint-disable no-undef, no-unused-vars */

const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const root = dir => path.resolve(__dirname, '../', dir);

config.plugins.push(
  new webpack.ProvidePlugin({
    h: ['hyperapp', 'h']
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    title: 'Portfolio | Jonas Kuske',
    template: root('index.html'),
    inject: true,
    minify: false,
    favicon: root('src/assets/images/favicon.ico')
  }),
  new WebpackPwaManifest({
    short_name: 'Portfolio',
    name: 'Portfolio | Jonas Kuske',
    description: 'Portfolio von Jonas Kuske, Designer & Developer.',
    start_url: '/?utm_source=homescreen',
    display: 'standalone',
    theme_color: '#585858',
    background_color: '#f0f0f0'
  })
);

module.exports = config;