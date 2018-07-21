const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const json = require('yaml-frontmatter-loader!./src/projects.yaml');

const outputDirectory = "dist";
const clientPort = 8080;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]

        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     { loader: 'css-loader', options: { minimize: true } }
        //   ]
        // })

        // use: [
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       // publicPath: '/'
        //     }
        //   },
        //   'css-loader'
        // ]
      },
      {
        test: /\.yaml$/,
        // use: [ 'json-loader', 'yaml-frontmatter-loader' ]
        loader: 'yaml-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),

    // new MiniCssExtractPlugin({
    //   filename: 'styles.css',
    //   chunkFilename: 'chunk.css'
    // })
    
    // new ExtractTextPlugin('styles.css'),
    // new OptimizeCssAssetsPlugin({      
    //   assetNameRegExp: /\.optimize\.css$/g,
    //   cssProcessor: require('cssnano'),
    //   cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
    //   canPrint: true
    // })
  ]
};