const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT || 8080,
  },
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
  ],
});