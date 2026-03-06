const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpg|jpeg|gif|webp|svg)$/i, type: "asset/resource" },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
  devServer: { static: "./dist", open: true },
  mode: "production",
};