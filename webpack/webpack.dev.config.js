const merge        = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');

module.exports = function (env) {
  return merge(commonConfig);
};
