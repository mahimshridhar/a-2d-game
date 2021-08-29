const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {

  mode: "development",
  devtool: "eval-source-map",
  entry: "./game.js",
  output: {
    filename: "bundle.min.js"
  },
  module: {
    rules: [
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader",
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],
};
