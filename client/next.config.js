const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    const {} = process.env
    const env = {}

    config.plugins.push(new webpack.EnvironmentPlugin(env))

    return config
  },
}
