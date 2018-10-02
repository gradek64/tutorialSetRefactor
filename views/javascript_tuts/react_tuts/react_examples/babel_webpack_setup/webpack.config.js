const path = require('path');

module.exports = {
  entry: './scripts/main.js',
  module: {
      rules: [
        {
          test: /\.js$/, //within your entry point ./lib/
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
   },
  output: {
    filename: 'bundle.js',
    path:__dirname
  }
};
