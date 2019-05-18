
import React from 'react'
import Header from '@/components/Header'

// 同构，一套代码在服务端和客户端各执行一次
const Login = () => {
    return (
        <div>
            <Header />
            <div>this is Login page</div>
            <input value="name"></input>
            <button type="button" onClick={() => alert('click1')}>click</button>
        </div>
    )
}

export default Login
