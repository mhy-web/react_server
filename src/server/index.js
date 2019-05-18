import express from 'express'
import { render } from './utils'

const app = express()
const port = 3309


// 客户端渲染方式
// import ReactDOM from 'react-dom'
// ReactDOM.render(<Home />, document.getElementById('root'))

// 服务端渲染方式
// import { renderToString } from 'react-dom/server'
// import { StaticRouter } from 'react-router-dom'
// import Routes from '@/Routes'

// 加载静态文件
app.use(express.static('public'))

app.get('*', function(req, res) {
    res.send(render(req))
})

const server = app.listen(port)
console.log(`http://127.0.0.1:${port}`)
