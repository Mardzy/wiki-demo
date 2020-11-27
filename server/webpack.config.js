const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  externals: [nodeExternals()],
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      "data-sources": path.resolve(__dirname, "data-sources"),
      "resolvers": path.resolve(__dirname, "resolvers"),
      "schema": path.resolve(__dirname, "schema"),
      "type-definitions": path.resolve(__dirname, "type-definitions")
    },
    modules: ["src"],
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    open: true
  }
};
