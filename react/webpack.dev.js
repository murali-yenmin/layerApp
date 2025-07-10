const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    port: process.env.PORT || 8085,
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv({
      path: "./.env.development",
    }),
  ],
});
