const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [{
      test: /\.js/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        presets: [
          'react',
          ['env', {targets: ['uglifyjs'] }]
        ]
      }
    }, {
      test: /\.css/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' }
      ]
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]

};