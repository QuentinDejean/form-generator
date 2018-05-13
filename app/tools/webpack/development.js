/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');

const {
  config: defaultConfig,
  path: {
    dist,
  },
} = require('./default');

const config = {
  ...defaultConfig,

  devServer: {
    contentBase: dist,
    hot: true,
  },

  mode: 'development',

  plugins: [
    ...defaultConfig.plugins,

    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
