const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devtool : "eval-cheap-module-source-map",
  entry : {
    index : path.resolve(__dirname, 'src', 'index.js'),
  },
  output : {
    filename : '[name].bundle.js',
    path : path.resolve(__dirname, 'public', 'dist'),
    publicPath : "/dist/",
    pathinfo : true,
    devtoolModuleFilenameTemplate : (info) =>
        path.resolve(info.absoluteResourcePath)
  },
  resolve : {
    modules : [ path.resolve(__dirname, 'packages'), 'node_modules' ],
    extensions : [ '.js' ],
    symlinks : false,
  },
  module : {
    strictExportPresence : true,
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : {loader : 'babel-loader?cacheDirectory'}
      },
      {
        test : /\.less$/,
        use : [
          {
            loader : 'style-loader',
            // options: {singleton: true},
          },
          {
            loader : 'css-loader',
            options : {sourceMap : true},
          },
          {
            loader : 'less-loader',
            options : {sourceMap : true},
          }

        ]
      }
    ]
  },
  plugins : [ new CleanWebpackPlugin() ],
  devServer : {
    contentBase : path.resolve(__dirname, 'public'),
    hot : true,
    open : true,
  },
};

if (process.env.NODE_ENV === "production") {
  module.exports.mode = "production";
  module.exports.devtool = "source-map";
} else {
  module.exports.mode = "development";
  // module.exports.entry.demoBundle = [module.exports.entry.demoBundle,
  // "webpack-hot-middleware/client"]; module.exports.plugins.push(new
  // webpack.HotModuleReplacementPlugin()); module.exports.output.globalObject =
  // "this";
}

