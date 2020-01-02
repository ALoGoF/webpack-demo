const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'production',
    // devtool:'cheap-module-eval-source-map',
    // devtool:'eval',
    // 开发环境
    // devtool:'cheap-module-source-map',
    // 生产环境
    entry: {
        index:'./src/index.js',
        // sub:'./src/index.js'
    },
    output: {
        filename:'[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer:{
        contentBase:path.join(__dirname, 'dist'),
        hot:true,
        hotOnly:true,
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
            }
            ,
            // {
            //     test:/\.(png|jpe?g|gif)$/i,
            //     use: [{
            //         loader:'file-loader',
            //         options: {
            //             esModule:false,
            //             outputPath:'images',
            //             name:'[name]-[hash].[ext]',
            //             pulbicPath: path.resolve(__dirname, 'dist')
            //         }
            //     }]
            // }
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
            },{
                test:/\.(s?css)$/,
                use:['style-loader',{
                    loader:'css-loader',
                    options:{
                        importLoaders:2,
                        modules: {
                            mode: 'local',
                            localIdentName: '[local]-[hash:base64:5]',
                            context: path.resolve(__dirname, 'src'),
                            hashPrefix: 'my-custom-hash',
                          },
                    }
                },
                'sass-loader','postcss-loader']
            }
        ]
},
        plugins:[new CleanWebpackPlugin({
        }),new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}