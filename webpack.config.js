import path from 'path';
import webpack from 'webpack';

export default {
  entry: {
    'luhn': './src/index.js',
    'luhn.min': './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'luhn',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: { rules: [{ use: 'babel-loader', test: /\.js$/, exclude: /node_modules/ }] },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      compress: { warnings: false },
      minimize: true,
    }),
  ],
};
