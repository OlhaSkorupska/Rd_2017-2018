const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let extractPlugin = new ExtractTextPlugin({
    filename: 'css/[name].css'
});

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: 'source-map',
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     exclude: /(node_modules)/,
            //     loader: 'eslint-loader',
            //     query: {
            //         presets: ['env']
            //     }
            // },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]',
                    outputPath: './images/',
                    publicPath: './.'
                }
            },
            {
                test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            minetype: 'application/font-woff',
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|otf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader'
            // }
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            title: 'index',
            template: './index.html',
            filename: 'index.html'
        })
    ]
};
