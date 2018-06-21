const path = require('path');

const config = {
  entry: './react_components/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "./node_modules"),
          path.resolve(__dirname, "./build"),
        ]
      }
    ]
  },
};

module.exports = config;
