const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: 'index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [{ test: /\.(tsx|ts)?$/, loader: 'ts-loader' }],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js'],
  },
};
