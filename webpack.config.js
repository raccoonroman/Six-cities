const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: isProd ? '' : 'eval',
  context: path.resolve(__dirname, 'src'),
  entry: 'index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    open: true,
    port: process.env.PORT,
    historyApiFallback: true,
  },
  module: {
    rules: [{ test: /\.(tsx|ts)?$/, loader: 'ts-loader' }],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js']
  },
};
