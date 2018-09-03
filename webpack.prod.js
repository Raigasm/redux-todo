const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const BabelMinifyWebpackPlugin = require("babel-minify-webpack-plugin")

module.exports = merge(common, {
  mode: "production",
  plugins: [new BabelMinifyWebpackPlugin()]
})
