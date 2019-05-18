import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from '@/Routes'
import Home from '@/views/Home'
import getStore from '@/store'

const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
                <Routes></Routes>
            </BrowserRouter>
        </Provider>
    )
}
// ReactDOM.render(<Home />, document.getElementById('root'))
ReactDOM.hydrate(<Home />, document.getElementById('root'))
