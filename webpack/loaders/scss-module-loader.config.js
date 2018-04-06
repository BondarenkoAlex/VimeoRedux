const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: process.env.NODE_ENV === 'development'
    ? 'styles/[name].[contenthash].css'
    : 'styles/[name].css',
  allChunks: true,
});

module.exports = {
  module: {
    rules: [{
      test: /\.module.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:3]'
            // localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }, {
          loader: 'sass-loader',
        },],
        // use style-loader in development
        fallback: 'style-loader',
      }),
    },],
  },
  plugins: [
    extractSass,
  ],
};
