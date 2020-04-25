const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

const webpackProdConfig = {
  mode: 'production',
};

module.exports = merge.smart(webpackBaseConfig, webpackProdConfig);
