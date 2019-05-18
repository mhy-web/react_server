const path = require('path')
const nodeExternals = require('webpack-node-externals')
const base = require('./webpack.base.confg')
const merge = require('webpack-merge')

const serverConfig =  {
    target: 'node',
    entry:  path.resolve(__dirname, '../src/server/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    externals: [nodeExternals()]
}

module.exports = merge(base, serverConfig)
