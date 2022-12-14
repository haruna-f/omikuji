/** @type {import('webpack').Configuration} */

const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const { resolve } = require('node:path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bandle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ]
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head',
      scriptLoading: 'defer',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.min.css',
    }),
    new RemoveEmptyScriptsPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/images/'),
          to: path.resolve(__dirname, 'dist/images/'),
        },
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist/'),
        },
        {
          from: path.resolve(__dirname, 'src/icon.svg'),
          to: path.resolve(__dirname, 'dist/'),
        },
        {
          from: path.resolve(__dirname, 'src/icon-192.png'),
          to: path.resolve(__dirname, 'dist/'),
        },
        {
          from: path.resolve(__dirname, 'src/icon-512.png'),
          to: path.resolve(__dirname, 'dist/'),
        },
        {
          from: path.resolve(__dirname, 'src/apple-touch-icon.png'),
          to: path.resolve(__dirname, 'dist/'),
        },
        {
          from: path.resolve(__dirname, 'src/.htaccess'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WebpackPwaManifestPlugin({
      name: '',
      icons: [
        {
          src: resolve("./src/icon-192.png"),
          sizes: '192x192',
        },
        {
          src: resolve("./src/icon-512.png"),
          sizes: '512x512',
        },
      ],
    }),
  ],
  // devtool: 'source-map',
  devServer: {
    open: true,
    hot: true,
    static: {
      directory: './dist',
    },
    // devMiddleware: {
    //   writeToDisk: true,
    // },
  },
}