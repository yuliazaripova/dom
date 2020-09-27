const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: {
      index: './src/index.js',
      navigator: './src/pages/navigator/navigator.js',
      screen: './src/pages/screen/screen.js',
      location: './src/pages/location/location.js',
      localStorage: './src/pages/local-storage/local-storage.js'
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].bundle.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        title: 'DOM',
        chunks: ['index'],
        template: 'index.html',
        filename: './index.html',
      }),
      new HtmlWebPackPlugin({
        title: 'Navigator',
        chunks: ['navigator'],
        template: 'src/pages/navigator/navigator.html',
        filename: './navigator.html',
      }),
      new HtmlWebPackPlugin({
        title: 'Screen',
        chunks: ['screen'],
        template: 'src/pages/screen/screen.html',
        filename: './screen.html',
      }),
      new HtmlWebPackPlugin({
        title: 'Location',
        chunks: ['location'],
        template: 'src/pages/location/location.html',
        filename: './location.html',
      }),
      new HtmlWebPackPlugin({
        title: 'Local storage',
        chunks: ['localStorage'],
        template: 'src/pages/local-storage/local-storage.html',
        filename: './local-storage.html',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
      overlay: true,
      stats: 'errors-only',
      clientLogLevel: 'none',
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: false,
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        },
      ],
    },
  };


  return config;
};