const project            = require('./project.config');
//const webpack = require('webpack');
const path               = require('path');
const webpack            = require('webpack');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer       = require('autoprefixer');

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
    path: path.resolve(project.basePath, project.outDir),
    publicPath: project.publicPath, //   bf-test-react/
    filename: __DEV__
      ? '[name].js'
      : '[name].[chunkhash].js',
  },
  externals: project.externals,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  resolve: {
    modules: [
      path.resolve(project.basePath, project.srcDir),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '*', '.json'],
  },
  devServer: {
    contentBase: path.resolve(project.basePath, project.outDir),
    port: 8080,
    host: 'localhost',

    //hot: true,
    //poll: true,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        //loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=
        // [name]__[local]___[hash:base64:5]!resolve-url-loader')

        loader: ExtractTextPlugin.extract('style', 'css!resolve-url-loader'),
      }, {
        test: /\.scss$/,
        //loader: 'style!css?sourceMap!postcss!sass?sourceMap',
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass?sourceMap'),
        exclude: /node_modules/,
      }, {
        test: /\.(jpe?g|jpg|png|gif|svg)$/i,
        exclude: /node_modules/,
        loaders: [
          'file?name=[path][name].[ext]',
        ],
      },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './src/*.html'),
        to: path.resolve(__dirname, './dist/[name].[ext]'),
      },
    ], {
      // By default, we only copy modified files during
      // a watch or webpack-dev-server build. Setting this
      // to `true` copies all files.
      copyUnmodified: false,
    }),
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname),
    }),
  ],

};
