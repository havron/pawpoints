/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/javascript/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './app/javascript/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'], exclude: /node_modules/ }
    ]
  },
  // add this line
  plugins: [HtmlWebpackPluginConfig],
  exclude: [/\.scss$/]
}
