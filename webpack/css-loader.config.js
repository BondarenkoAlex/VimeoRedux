module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /(node_modules)/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    }],
  },
};
