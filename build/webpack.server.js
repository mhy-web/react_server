const path = require('path')
const nodeExternals = require('webpack-node-externals')
const base = require('./webpack.base.confg')
const merge = require('webpack-merge')

const serverConfig =  {
    target: 'node',
    entry: {
        app: path.resolve(__dirname, '../src/server/index.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    externals: [nodeExternals()],
    devServer: {
        hot: true,
        compress: true,
        host: '127.0.0.1',
        port: 3309,
        open: true,
        overlayy: { warning: false, error: true},
        quiet: true
    }
}

module.exports = merge(base, serverConfig)
