const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const html = require('html-webpack-plugin');


const config = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: path.join(__dirname, "src", "js", "index.js"),
  context: path.join(__dirname, "src"),
  module: {
    loaders: [
      // JAVASCRIPT / BABEL
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      // CSS / SASS
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass', 'postcss']
      },
      // FONTS
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff2" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  resolve: {
      modulesDirectories: ["node_modules", "bower_components"],
  },
  plugins: debug ? [
    new html({
      title: 'Github-Flavored Markdown Previewer',
      filename: 'index.html',
      template: 'index.ejs'
    }),
  ] : [
    new html({
      title: 'Github-Flavored Markdown Previewer',
      filename: 'index.html',
      template: 'index.ejs'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  postcss: function() {
    return [autoprefixer]
  }
}

module.exports = config