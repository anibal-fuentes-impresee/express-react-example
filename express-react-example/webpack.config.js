var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
require("babel-polyfill");

module.exports = (env, args) => { return {
  context: __dirname,
  entry: ["babel-polyfill", "./src/index"],
  output: {
    path: path.join(__dirname,'dist'),
    filename: "[name]-[hash].js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleTracker({ filename: "../webpack-stats.json" }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_BASE_URL": JSON.stringify(
        env.REACT_APP_BASE_URL || ""
      ),
      "process.env.REACT_APP_BASE_ROUTE": JSON.stringify(
        env.REACT_APP_BASE_ROUTE || ""
      ),
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(pure-react-carousel)\/).*/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: (url, resourcePath, context) => {
                if (args.mode === "development"){
                  return url;
                }
                else {
                  return url;
                }
              }
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  }
}};
