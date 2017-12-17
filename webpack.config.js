const path = require('path');  //shortcut to file system from node

module.exports = {
  entry: {                             //pointing to the root of our project, which is just a bunch of statements requiring assets
    main: "./lib/index.js",            //a bundle for your actual source code
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  }
};
