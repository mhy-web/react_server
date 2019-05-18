const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.confg')

const clientConfig = {
    entry: {
        index:  path.resolve(__dirname, '../src/client/index.js')
    },
    output: {
        publicPath: '../public',
        filename: 'index.js',
        path: path.resolve(__dirname, '../public')
    }
}

module.exports = merge(base, clientConfig)
