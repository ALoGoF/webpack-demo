const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        index:'./src/index.js',
        // sub:'./src/index.js'
    },
    output: {
        filename:'[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules:[
            {
                test:'/\.m?js$/',
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
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
                        limit:2048,
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
                        modules:true
                    }
                },
                'sass-loader','postcss-loader']
            }
        ]
},
        plugins:[new CleanWebpackPlugin({
        }),new HtmlWebpackPlugin({
            template:'./index.html'
        })]
}