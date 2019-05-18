const webpack = require('webpack')
const path = require('path')

module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules|public|dist/,
            loader: 'babel-loader'
        }, {
            test: /\.[less|css]?$/,
            loader: ['less-loader', 'css-loader']
        }]
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': path.join(__dirname, '../src'),
            server: path.join(__dirname, '../src/server'),
            client: path.join(__dirname, '../src/client'),
            public: path.join(__dirname, '../public'),
            utils: path.join(__dirname, '../utils')
        }
    }
}
