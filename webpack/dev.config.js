var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer')

var BUILD_DIR = path.resolve(__dirname, '../build');
var APP_DIR = path.resolve(__dirname, '../src');

var config = {
  devtool: "source-map",
  entry: [
    'webpack-dev-server/client?http://localhost:6001',
    'webpack/hot/only-dev-server',
    APP_DIR + '/main.js',

  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"web"'
    })
  ],
  node: {
    net: 'empty',
    dns: 'empty',
    fs: 'empty',
    readline: 'empty'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
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
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.html$/,
        loader: "file?name=[path][name].[ext]&context=./src"
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
    headers: { "Access-Control-Allow-Origin": "*" },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
  }
};

module.exports = config;
