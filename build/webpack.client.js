const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.confg')

const clientConfig = {
    entry: path.resolve(__dirname, '../src/client/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../public')
    }
}

module.exports = merge(base, clientConfig)
