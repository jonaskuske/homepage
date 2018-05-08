const config = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

config.plugins.push(
  new HtmlWebpackPlugin({
    title: 'Portfolio | Jonas Kuske',
    template: './index.html',
    inject: true,
    minify: false,
    favicon: './src/assets/images/favicon.ico'
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