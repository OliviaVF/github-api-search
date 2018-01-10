const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
  alias: {
    containers: path.join(__dirname, './src/containers'),
    components: path.join(__dirname, './src/components'),
    styles: path.join(__dirname, './src/styles'),
  }
},
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015'],
            },
          },
          {
            loader: 'react-svg-loader',
            query: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader'
      },
      {
        test: /\.scss$/,
        loader: 'css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'sass-loader'
      },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new Dotenv({
      path: '.env', // Path to .env file (this is the default)
      safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
    })
  ]
}
