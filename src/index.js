import React from 'react'
import express from 'express'
import Home from './views/Home'
const app = express()
const port = 3309

// const express = require('express')
// const Home = require('./views/Home')

// 客户端渲染方式
// import ReactDOM from 'react-dom'
// ReactDOM.render(<Home />, document.getElementById('root'))

// 服务端渲染方式
import { renderToString } from 'react-dom/server'

app.get('/', function(req, res) {
    const content = renderToString(<Home />)
    // res.send( renderToString(<Home />) )
    console.log('----------content--------------------', content);
    res.send(`
        <html>
            <head>hello</head>
            <body>
                hhh
            </body>
        </html>
        `)
})

// app.get('/home', function(req, res) {
//     const content = renderToString(<Home />)
//     // res.send( renderToString(<Home />) )
//     console.log('----------content--------------------', content);
//     res.send(`
//         <html>
//             <head>hello</head>
//             <body>
//                 ${content}
//             </body>
//         </html>
//     `)
// })

var server = app.listen(port)
console.log(`http://127.0.0.1:${port}`)
