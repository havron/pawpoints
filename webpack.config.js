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

/*
// webpack.config.js

"use strict";

var path = require('path');
var config = module.exports = {};

config.context = __dirname;

// Specify your entries, I store all my webpack managed JavaScript in
// app/webpack, as per my earlier requirements.
config.entry = {
  cart: './app/webpack/cart.js'
};

// This outputs an entry named 'foobar' into
// app/assets/javascripts/entries/foobar.js.
config.output = {
  path: path.join(__dirname, "app/assets/javascripts/entries"),
  filename: "[name].js"
}

// Use babel-loader for our *.js files.
config.module = {
  loaders: [
    { test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader" }
  ]
}
*/
