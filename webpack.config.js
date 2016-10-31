var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './app/components/index.js');
var BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
    entry:  [//安装webpack-dev-server模块，实现自动刷新
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        APP_PATH
    ],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
          //loader写法很重要，babel升级拆分了模块，需要 npm install babel-loader babel-core babel-preset-es2015 babel-preset-react —save-dev
          //然后 loader: "babel?presets[]=react,presets[]=es2015"就不会报语法错误了
          {test: /\.jsx?$/, loader: "babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-1",exclude: /node_modules/},
          {test: /\.less$/, loader: 'style!css!less'}
        ]
    }
}