//一定要关注webpack相关的包的版本兼容性
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode : 'development',
    entry : {
        app : './src/index.js',
    },
    output : {
        path : path.join(__dirname , '..' , 'dist'), //这里要使用绝对路径
        filename : '[name].js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : [
                    {
                        loader : 'babel-loader',
                        options : {
                            presets : ['@babel/preset-react']
                        }
                    }
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({template : './public/index.html'})
    ],
    devServer : {
        contentBase : './index.html', //这里路径为啥这样写也不太清楚
        hot : true,
        port : 4000,
    }
}