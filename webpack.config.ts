// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      //...
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  //...
};
