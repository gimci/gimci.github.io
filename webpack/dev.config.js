var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_PATH = path.resolve(__dirname, '../build');
var APP_PATH = path.resolve(__dirname, '../src');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/main'
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('style.css', {allChunks: true}),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
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
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  }
};


// var config = {
//   devtool: "source-map",
//   entry: [
//     'webpack-hot-middleware/client',
//     APP_PATH + '/main.js',
//
//   ],
//   output: {
//     path: BUILD_PATH,
//     filename: 'bundle.js',
//     publicPath: '/'
//   },
//   plugins: [
//     new ExtractTextPlugin('style.css', {allChunks: true}),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': 'production'
//     }),
//     new HtmlWebpackPlugin({
//       hash: true,
//       filename: 'index.html',
//       template: path.resolve(__dirname, '../src/index.html')
//     }),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin(),
//   ],
//   node: {
//     net: 'empty',
//     dns: 'empty',
//     fs: 'empty',
//     readline: 'empty'
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   module : {
//     loaders : [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loaders: ['react-hot', 'babel-loader?babelrc=false,presets[]=es2015,presets[]=stage-0,presets[]=react'],
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loaders: ['react-hot', 'babel'],
//       },
//       {
//         test: /\.scss$/,
//         loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass!postcss-loader')
//       },
//       // {
//       //   test: /\.scss$/,
//       //   include: path.join(__dirname, 'src'),
//       //   loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer-loader?browsers=last 2 version!sass')
//       // },
//       { test: /\.css$/,
//         loader: ExtractTextPlugin.extract("style-loader", "css-loader")
//       },
//       {
//         test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//         loader: "file-loader"
//       },
//       {
//         test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//         loader: "url-loader?limit=10000&mimetype=application/font-woff"
//       },
//       {
//         test: /\.(png|jpg)$/,
//         loader: 'url-loader?limit=8192'
//       },
//       {
//         test: /\.json$/,
//         loader: 'json-loader'
//       },
//     ]
//   },
//   devServer: {
//     historyApiFallback: {
//       index: 'index.html'
//     },
//     headers: { "Access-Control-Allow-Origin": "*" },
//     postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
//   }
// };
