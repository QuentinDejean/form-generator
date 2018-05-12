/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const root = path.resolve(__dirname, '../../../');
const dist = path.resolve(root, 'dist');

const config = {
  entry: {
    app: path.resolve(root, 'app/src/index.js'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin([dist]),
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: dist,
  },
};

module.exports = {
  config,
  path: {
    dist,
  },
};
