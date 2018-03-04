const HtmlWebpackPlugin = require("html-webpack-plugin"); // automatically adds the correct bundles to index.html
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //Extract text from a bundle, or bundles, into a separate file.(CSS)
const path = require('path'); //helper from node.js

const VENDOR_LIBS = ['jquery', 'bootstrap', 'popper.js', 'react', 'react-dom', 'react-redux', 'react-router', 'redux'];

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' //'[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, 
            { 
                test: /.(jpg|png|svg)$/, 
                loader: 'file-loader', 
                options: { 
                     name: '[path][name].[hash].[ext]' 
                 } 
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist")
    }
};