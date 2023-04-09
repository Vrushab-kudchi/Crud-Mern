const path = require('path');

module.exports = {
  entry: './src/index.js', // entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: 'bundle.js', // output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // use babel-loader for .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
 devServer: {
  allowedHosts: ['*'],
  // other dev server configuration options
},
};
