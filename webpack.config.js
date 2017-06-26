const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.js/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            ['env',
              {
                targets: ['uglifyjs'],
              }
            ]
          ]
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    })
  ]

};