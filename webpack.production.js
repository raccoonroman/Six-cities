const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

const webpackProdConfig = merge(webpackBaseConfig, {
  mode: 'production',
});

module.exports = merge.smart(webpackBaseConfig, webpackProdConfig);