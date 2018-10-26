const path = require('path')
const config = require('./webpack.base')
const dotenvWebpack = require('dotenv-webpack')

const root = dir => path.resolve(__dirname, '../', dir)

config.mode = 'development'

config.devServer = {
  contentBase: root('static'),
  quiet: true,
  port: 8081,
}

config.plugins.push(new dotenvWebpack({ path: root('../.env.dev') }))

module.exports = config
