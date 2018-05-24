var webpack = require('webpack');
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
      app_react_diff:                 './src/app_react_diff.js',
      app_react_batch:                './src/app_react_batch.js',
      app_react_batch_parent_child:   './src/app_react_batch_parent_child.js',
      app_react_life_circle:          './src/app_react_life_circle.js',
      app_redux_raw:                  './src/app_redux_raw.js',
      app_redux_raw_shallow_equal:    './src/app_redux_raw_shallow_equal.js',
      app_react_performance_pure:     './src/app_react_performance_pure.js',
      app_react_inherit:              './src/app_react_inherit.js',
      app_redux_connect:              './src/app_redux_connect.js',
      app_react_children:             './src/app_react_children.js',
      app_react_quick_demo:           './src/app_react_quick_demo.js',
      app_react_component_decorator_perf: './src/app_react_component_decorator_perf.js',
      app_react_component_route_perf: './src/app_react_component_route_perf.js',
      app_react_ref:                  './src/app_react_ref.js',
      app_react_form_controlled:      './src/app_react_form_controlled.js',
      app_react_form_uncontrolled:    './src/app_react_form_uncontrolled.js',
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