var webpack = require('webpack');
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
      app_react_diff:               './src/app_react_diff.js',
      app_react_batch:              './src/app_react_batch.js',
      app_react_batch_parent_child: './src/app_react_batch_parent_child.js',
      app_react_life_circle:        './src/app_react_life_circle.js',
      app_redux_raw:                './src/app_redux_raw.js',
      app_react_performance_pure:   './src/app_react_performance_pure.js',
      app_react_inherit:            './src/app_react_inherit.js',
  },
  output: {
      path: __dirname + '/build',
      filename: '[name].js'
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