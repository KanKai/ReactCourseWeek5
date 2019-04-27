const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./config.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "../public/index.html")
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "../public"),
    hot: true,
    inline: true,
    port: 3000,
    historyApiFallback: true
  }
});
