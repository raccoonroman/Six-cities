const path = require(`path`);
const TsconfigPathsPlugin = require(`tsconfig-paths-webpack-plugin`);

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: `none`,
  context: path.resolve(__dirname, `src`),
  entry: `index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    port: 1281,
    historyApiFallback: true,
  },
  module: {
    rules: [{ test: /\.(tsx|ts)?$/, loader: `ts-loader` }],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [`.ts`, `.tsx`, `.js`, `json`]
  },
};
