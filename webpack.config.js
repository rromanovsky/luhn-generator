import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'luhn.min.js',
    library: 'luhn',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [
    new UglifyJSPlugin(),
  ],
};
