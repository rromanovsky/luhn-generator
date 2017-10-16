import path from 'path';
import webpack from 'webpack';

export default {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'luhn.min.js',
    library: 'luhn',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: { rules: [{ use: 'babel-loader', test: /\.js$/, exclude: /node_modules/ }] },
  plugins: [new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })],
};
