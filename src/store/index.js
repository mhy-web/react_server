import { createStore, applyMiddleware, combinreducers } from 'redux'
import thunk  from 'redux-thunk'
import { reducer as homeReducer } from '../views/Home/store'

// const reducer = (state = { name: 'dell' }, action) => {
//     return state
// }

const reducer = combinreducers({
    home: homeReducer
})

const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export default getStore
