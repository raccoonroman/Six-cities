const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');


const webpackDevConfig = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    open: true,
    port: process.env.PORT,
    historyApiFallback: true,
  },
});

module.exports = new Promise((resolve, reject) => {
  resolve(webpackDevConfig);
});