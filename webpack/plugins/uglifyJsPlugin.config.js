//const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        ie8: false,
        ecma: 8,
        output: {
          comments: false,
          beautify: true, //false,
        },
        compress: {
          warnings: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        warnings: false,
      }
    })
  ]
};

// module.exports = {
//   plugins: [
//     new UglifyJSPlugin()
//   ]
// };
