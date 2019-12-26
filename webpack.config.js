const path = require('path')
module.exports = {
    mode: 'production',
    entry: {
        main:'./src/index.js'
    },
    output: {
        filename:'index.js',
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
            {
                test:/\.(png|jpe?g|gif)$/i,
                use: [{
                    loader:'file-loader',
                    options: {
                        outputPath:'/images',
                        esModule:false,
                        name:'[name].[ext]',
                    }
                }]
            }
        ]
}
}