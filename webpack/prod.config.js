var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

var BUILD_PATH = path.resolve(__dirname, '../build');
var APP_PATH = path.resolve(__dirname, '../src');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: APP_PATH + '/main.js'
  },
  output: {
    path: BUILD_PATH,
    filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin('style.css', {allChunks: true}),
    new webpack.NoErrorsPlugin(),
    // new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
  ],
  resolve: {
    modulesDirectories: ['node_modules']
  },
  node: {
    net: 'empty',
    dns: 'empty',
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass!postcss-loader')
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      // {
      //   test: /\.html$/,
      //   loader: "file?name=[path][name].[ext]&context=./src"
      // },
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}
