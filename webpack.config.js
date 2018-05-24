// const webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: './src/min.js',              //必须是绝对路径
    output : {
        path: path.resolve(__dirname, './'), //必须是绝对路径
        filename: 'bundle.js',              //没有生成文件   
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'}
        ]
    }
}