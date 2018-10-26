const path = require('path')

const webpack = require('webpack')
const ProgressWebpackPlugin = require('progress-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const root = dir => path.resolve(__dirname, '../', dir)

const config = {
  mode: 'production',
  node: {
    fs: 'empty',
  },
  performance: {
    maxAssetSize: 350000,
  },
  stats: {
    excludeAssets: /\.(jpe?g|png|gz|json|ico|webmanifest)$/,
    modules: false,
    hash: false,
    children: false,
    chunks: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    builtAt: false,
  },
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
          name: 'assets/[path][name].[hash:6].[ext]',
        },
      },
      {
        test: /\.json/,
        loader: 'file-loader?name=[name].[hash:6].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      h: ['hyperapp', 'h'],
    }),
    new ProgressWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    quiet: true,
  },
}

module.exports = config
