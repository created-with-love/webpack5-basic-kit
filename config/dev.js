const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const shared = require('./shared');

module.exports = merge(shared, {
  mode: 'production',

  // sets type of source-map https://webpack.js.org/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      // css shall be injected into DOM
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
    //   plugin generates an HTML5 file that includes all webpack bundles in the body using script tags
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    contentBase: paths.BUILD,
    liveReload: true,
    publicPath: '',
    historyApiFallback: true,
    compress: true,
    port: 7001,
    stats: 'errors-only',
    open: true,
    watchContentBase: true,
  },
});
