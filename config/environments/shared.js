const paths = require('../paths/paths');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const WebpackBar = require('webpackbar');

module.exports = env => ({
  mode: env.mode,
  // An absolute string to the directory that contains the entry files
  context: paths.SRC,
  //    Where webpack looks to start building the bundle
  entry: [paths.SRC + '/index.js'],
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.BUILD,
    publicPath: '/',
  },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.js$/,
  //         include: paths.SRC_DIR,
  //         use: ['babel-loader'],
  //       },
  //       {
  //         test: /\.(gif|png|jpe?g|svg)$/i,
  //         use: [
  //           {
  //             loader: 'url-loader',
  //             options: {
  //               name: '[path][name].[ext]',
  //               limit: 8192,
  //               esModule: false,
  //             },
  //           },
  //           'img-loader',
  //         ],
  //       },
  //       {
  //         test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
  //         use: [
  //           {
  //             loader: 'url-loader',
  //             options: {
  //               name: '[name].[ext]',
  //               outputPath: 'fonts/',
  //               limit: 10000,
  //               mimetype: 'application/font-woff',
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
  //         use: [
  //           {
  //             loader: 'file-loader',
  //             options: {
  //               name: '[name].[ext]',
  //               outputPath: 'fonts/',
  //             },
  //           },
  //         ],
  //       },
  //       {
  //         test: /\.html$/,
  //         use: 'html-loader',
  //       },
  //       {
  //         test: /\.hbs$/,
  //         use: 'handlebars-loader',
  //       },
  //     ],
  //   },
  //   plugins: [
  //     new CleanWebpackPlugin(),
  //     new FriendlyErrorsWebpackPlugin(),
  //     new WebpackBar(),
  //   ],
});
