const path = require('path')

const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const ProgressWebpackPlugin = require('progress-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const analyze = process.env.WEBPACK_ANALYZE === 'true'

/**
 * Resolve a file relative to project root
 * @param {string} relativePath Path to be resolved relative to project root
 */
const fromRoot = relativePath => path.resolve(__dirname, '../', relativePath)

const config = {
  mode: 'production',
  entry: ['./src/main.js'],
  output: {
    path: fromRoot('dist'),
    filename: 'main.[hash:6].js',
    chunkFilename: '[name].[chunkhash:6].js',
    publicPath: '/',
  },
  node: { fs: 'empty' },
  performance: { maxAssetSize: 350000 },
  stats: analyze
    ? undefined
    : {
        excludeAssets: /\.(jpe?g|png|gz|json|ico|webmanifest)$/,
        modules: false,
        hash: false,
        children: false,
        chunks: false,
        chunkGroups: false,
        chunkModules: true,
        chunkOrigins: false,
        builtAt: false,
      },
  optimization: {
    minimizer: [new TerserPlugin({ cache: true, parallel: true, extractComments: true })],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: { '@': fromRoot('src') },
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
            options: { importLoaders: 1 },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        loader: 'file-loader',
        options: {
          context: fromRoot('src/assets'),
          name: 'assets/[path][name].[hash:6].[ext]',
        },
      },
    ],
  },
  plugins: [new webpack.ProvidePlugin({ h: ['hyperapp', 'h'] })].concat(
    analyze ? [] : [new ProgressWebpackPlugin(), new FriendlyErrorsWebpackPlugin()],
  ),
  devServer: { historyApiFallback: true, quiet: true },
}

module.exports = { config, fromRoot }
