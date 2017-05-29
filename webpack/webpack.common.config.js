const project = require('./project.config.js');

const babelLoader = require('./babel-loader.config.js');
const cssLoader = require('./css-loader.config.js');

const path              = require('path');
const webpack           = require('webpack');
const merge             = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
//const autoprefixer = require('autoprefixer');

const __DEV__  = project.env === 'development';
const __PROD__ = project.env === 'production';
const __TEST__ = project.env === 'test';

module.exports = merge({
    devtool: __DEV__
      ? 'cheap-inline-module-source-map'
      : 'source-map',
    context: path.resolve(project.basePath, project.srcDir),
    entry: {
      main: project.main,
      vendor: project.vendors,
    },
    output: {
      path: path.resolve(project.basePath, `${project.outDir}/js`),
      publicPath: project.publicPath,
      filename: __DEV__
        ? '[name].js'
        : '[name].[chunkhash].js',
    },
    externals: project.externals,
    resolve: {
      modules: [
        path.resolve(project.basePath, project.srcDir),
        'node_modules',
      ],
      extensions: ['.js', '.jsx', '.json'],
    },
    devServer: {
      contentBase: path.resolve(project.basePath, project.outDir),
      publicPath: `${project.publicPath}js/`,
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },

    module: {
      rules: [

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
      new webpack.NoEmitOnErrorsPlugin(),
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
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: 2,
      }),

      /*new webpack.optimize.UglifyJsPlugin({
       compress: true,
       beautify: false,
       comments: false,
       }),*/
    ],
  },
  babelLoader,
  cssLoader,
);

