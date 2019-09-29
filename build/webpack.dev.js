const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// "presets": [["@babel/preset-env", {
//     "targets": {
//         "chrome": "67"
//     },
//     "useBuiltIns": "usage"
// }]]

const devConfig = {
    mode: 'development',   //development默认开启source-map,
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',   //服务器根目录
        open: true,              //自动打开浏览器
        port: 8000,
        hot: true
    }
};

module.exports = merge(commonConfig, devConfig);