const express = require('express')
const app = express()
const port = 3309
const Home = require('./views/Home/index.js')

app.get('/', function(req, res) {
    res.send(
        `<html>
            <head>hello</head>
            <body>
                <h1>first</h1>
                <span>listen</span>
            </body>
        </html>`
    )
})

var server = app.listen(port)
console.log(`http://127.0.0.1:${port}`)
