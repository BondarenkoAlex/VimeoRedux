const project = require('./project.config');

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const autoprefixer = require('autoprefixer');

const __DEV__  = project.env === 'development';
const __TEST__ = project.env === 'test';
const __PROD__ = project.env === 'production';

module.exports = {
  devtool: __DEV__
    ? 'cheap-inline-module-source-map'
    : 'source-map',
  context: path.resolve(project.basePath, project.srcDir),
  entry: {
    main: project.main,

    //vendor: project.vendors,
  },
  output: {
    path: path.resolve(project.basePath, `${project.outDir}/js`),
    publicPath: project.publicPath,
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
  },
  externals: project.externals,
  resolve: {
    modules: [
      path.resolve(project.basePath, project.srcDir),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '*', '.json'],
  },
  devServer: {
    contentBase: path.resolve(project.basePath, project.outDir),
    open: true,
    //publicPath: project.publicPath,
    hot: true,
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          //publicPath: '../styles',
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(jpe?g|jpg|png|gif|svg)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '../images/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    /*new CleanWebpackPlugin(project.outDir, {
      root: path.resolve(project.basePath),
      exclude: ['index.html', 'images', 'js']
    }),*/
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(project.basePath, './public/*.html'),
        to: path.resolve(project.basePath, `${project.outDir}/[name].[ext]`),
      },
    ]),
    new ExtractTextPlugin({
      filename: '../styles/[name].css',
      allChunks: true,
    }),
  ],
}
;
