const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let extractPlugin = new ExtractTextPlugin({
    filename: 'css/[name].css'
});

module.exports = {
    entry: './js/table.js',
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
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: {
                    limit: '10000',
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
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
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            title: 'table',
            template: './table.html',
            filename: 'table.html'
        })
    ]
};
