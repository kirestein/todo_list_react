const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + 'public',
        filename: './App.jsx'
    },
    devServer: {
        port: 8080,
        contentBase: 'public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('App.css')
    ],
    module: {
        loaders: [{
            test: './js[x]?$/',
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presents: ['es20115', react],
                plugins: ['transform-objectt-est-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*s/,
            loader: 'file'
        }]
    }
}