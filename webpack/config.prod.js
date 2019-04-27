const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./config.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "../build/index.html"),
      title: "Social Network"
    }),
    new UglifyJSPlugin({
      sourceMap: false,
      uglifyOptions: {
        compress: true
      }
    })
  ],
});