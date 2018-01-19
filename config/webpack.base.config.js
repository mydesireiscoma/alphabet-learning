var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../docs'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }, {
      test: /\.(png|jpg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 514
        }
      }
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new CleanWebpackPlugin([ 'docs/*' ], { root: path.join(__dirname, '..') })
  ],
  devtool: 'source-map'
};