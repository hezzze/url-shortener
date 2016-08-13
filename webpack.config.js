var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: {
    app: [path.resolve(__dirname, 'app/main.jsx')],
    vendors: ['react']
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'assets']
  },
  debug: true,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['babel-plugin-transform-decorators-legacy', 'babel-plugin-transform-class-properties', 'babel-plugin-transform-object-rest-spread']
      },
      exclude: /node_modules/
    },{
      test: /\.css$/,
      loader: 'css'
    }, {
      test: /(png|jpg|jpeg|gif|svg)/,
      loader: 'url-loader?limit=10000'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  devtool: 'source-map'
};

module.exports = config;
