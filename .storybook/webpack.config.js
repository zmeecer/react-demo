const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap&modules", "sass"]
      }
    ]
  }
};
