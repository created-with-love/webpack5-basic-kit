const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => ({
  // sets type of source-map https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      // plugin extracts css to separate file
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    //   plugin generates an HTML5 file that includes all webpack bundles in the body using script tags
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[id].[contenthash].css',
    }),
  ],
  optimization: {
    minimize: true,
    //   css plugin minimizes css, terser plugin minimizes js
    minimizer: [new OptimizeCssAssetsPlugin({}), new TerserPlugin()],
  },
});
