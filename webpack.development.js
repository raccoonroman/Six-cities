const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

const webpackDevConfig = {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    open: true,
    port: process.env.PORT,
    historyApiFallback: true,
  },
};

module.exports = merge.smart(webpackBaseConfig, webpackDevConfig);