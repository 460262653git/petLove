let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve('build'),
        filename:'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test: /\.(jpg|png|gif|svg)$/,use: 'url-loader'}
        ]
    },
    //出错的报错处
    devtool:'cheap-module-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
};



















// let path = require('path');
// let HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//     entry:'./src/index.js',
//     output:{
//         path:path.resolve('build'),
//         filename:'bundle.js'
//     },
//     devServer:{
//         historyApiFallback:true
//     },
//     module:{
//         rules:[
//             {test:'/\.js$/',use:'babel-loader',exclude:'/node_modules/'},
//             {test:'/\.less$/',use:['style-loader','css-loader','less-loader']},
//             {test:'/\.(jpg|png|svg)$/',use:'url-loader'}
//         ]
//     },
//     devtool:'cheap-module-source-map',
//     plugins:[
//         new HtmlWebpackPlugin({
//             template:'index.html'
//         })
//     ]
// }