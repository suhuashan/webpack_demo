const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    performance: false,
    entry: {
        main: './src/index.js',
        // another: './src/js/another-module.js'
    },
    output: {
        // publicPath: '',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        usedExports: true,
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    // name: 'common.bundle.js'
                    // filename
                },
            default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             name: '[name]_[hash].[ext]',
            //             outputPath: 'images/',
            //             limit: '102400'
            //         }
            //     }
            // },
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images/'
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.js$/i,
                use: [{
                    loader: 'babel-loader'
                }, {
                    loader: 'imports-loader?this=>window'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
}