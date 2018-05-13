/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const {
  config: defaultConfig,
} = require('./default');

const config = {
  ...defaultConfig,

  devtool: 'cheap-module-source-map',

  output: {
    ...defaultConfig.output,
    filename: '[name].[chunkhash:8].js',
  },

  mode: 'production',

  plugins: [
    ...defaultConfig.plugins,

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],

  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
        },
        sourceMap: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = config;
