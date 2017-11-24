var webpack = require('webpack');
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
      react_diff: './src/app_react_diff.js',
      redux_raw:  './src/app_redux_raw.js'
  },
  output: {
      path: __dirname + '/build',
      filename: '[name]_bundle.js'
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }]
  }
};