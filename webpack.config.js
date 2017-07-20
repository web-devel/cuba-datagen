const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

module.exports = {

  entry: './src/index.tsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['react-app']
          }
        },
        {
          loader: 'ts-loader'
        }
      ],
    }, {
      test: /\.(css|scss)$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
      ]
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    }),
    // new webpack.optimize.UglifyJsPlugin()
  ],

  resolve: {
    extensions: [ '.ts', '.tsx', ".js"]
  }
};