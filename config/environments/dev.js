const paths = require('../paths/paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    contentBase: paths.BUILD,
    publicPath: '',
    historyApiFallback: true,
    compress: true,
    port: 7000,
    stats: 'errors-only',
    open: true,
  },
});
