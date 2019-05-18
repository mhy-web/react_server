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
            test: /\.less?$/,
            use: [ {
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: true,
                    localIdentName: '[local]__[hash:base64:5]'
                }
            }, {
                loader: 'less-loader'
            }]
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
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoEmitOnErrorsPlugin()
    // ],
    devtool: 'cheap-source-map'

}
