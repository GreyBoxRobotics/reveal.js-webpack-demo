const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool : "eval-cheap-module-source-map",
  entry : {
    index : path.resolve(__dirname, 'src', 'index.js'),
  },
  output : {
    filename : '[name].js',
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
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : {loader : 'babel-loader'}
      },
      {
        test : /\.(sa|sc|c)ss$/,
        use : [
          MiniCssExtractPlugin.loader,
          {
            loader : "css-loader",
            // options: {
            //   modules: true,
            //   sourceMap: true,
            //   importLoader: 2
            // }
          },
          'sass-loader',
        ],
      },
      {
        test : /(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        use : [ {
          loader : 'file-loader',
          options : {
            name : '[name].[ext]',
            publicPath : '../webfonts/',
            outputPath : 'lib/webfonts/',
            emitFile : true
          }
        } ]
      },

    ]
  },
  plugins : [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename : '[name].css'}),
  ],
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
