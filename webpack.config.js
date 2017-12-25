var webpack = require('webpack');
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
      app_react_diff:         './src/app_react_diff.js',
      app_react_batch:        './src/app_react_batch.js',
      app_react_batch_parent: './src/app_react_batch_parent.js',
      app_redux_raw:          './src/app_redux_raw.js'
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