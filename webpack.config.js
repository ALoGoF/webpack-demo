const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');
module.exports = {
  mode: 'development',
  devtool:'inline-cheap-module-source-map',
  // devtool:'eval',
  // 开发环境
  // devtool:'cheap-module-source-map',
  // 生产环境
  entry: {
    index:'./src/main.js',
    // sub:'./src/index.js'
  },
  output: {
    filename:'[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer:{
    contentBase:path.join(__dirname, 'dist'),
    hot:true,
    quiet: true,
  },
  resolve:{
    extensions: [".js", ".json",'.vue'],
    modules:['node_modules',path.resolve(__dirname, "src")],
    alias:{
      '@':path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-env']
        }
      },
      {
        test:/\.(png|jpe?g|gif)$/i,
        use:[{
          loader:'url-loader',
          options:{
            limit:10,
            esModule:false,
            outputPath:'images',
          }
        }]
      },
      {
        test:/\.(s?css)$/,
        use:['style-loader',{
          loader:'css-loader',
          options:{
            importLoaders:2
          }
        },'sass-loader','postcss-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/.(woff|woff2|eot|ttf|otf)$/i,
        loader:'file-loader'
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin({
    }),
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      complete:'-',
      clear:true,
    }),
    new FriendlyErrorsWebpackPlugin({
      quiet: true,
    })
  ]
}