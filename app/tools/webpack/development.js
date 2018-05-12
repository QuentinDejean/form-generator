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
  },

  mode: 'development',
};

module.exports = config;
