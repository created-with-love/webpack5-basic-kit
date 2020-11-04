// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => ({
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[contenthash].js',
  },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/,
  //         use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  //       },
  //       {
  //         test: /\.scss$/,
  //         use: [
  //           MiniCssExtractPlugin.loader,
  //           'css-loader',
  //           'postcss-loader',
  //           'sass-loader',
  //         ],
  //       },
  //     ],
  //   },
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: './index.html',
  //       minify: {
  //         collapseWhitespace: true,
  //         removeComments: true,
  //         removeRedundantAttributes: true,
  //         removeScriptTypeAttributes: true,
  //         removeStyleLinkTypeAttributes: true,
  //         useShortDoctype: true,
  //       },
  //     }),
  //     new MiniCssExtractPlugin({
  //       filename: '[name].[contenthash].css',
  //       chunkFilename: '[name].[id].[contenthash].css',
  //     }),
  //     new OptimizeCssAssetsPlugin({}),
  //   ],
});
