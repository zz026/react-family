import { createStore, applyMiddleware, combineReducers } from '../w-redux'
// import { createStore, applyMiddleware } from '../kredux'
// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// import promise from 'redux-promise'
import logger from '../w-redux/logger'
import thunk from '../w-redux/thunk'
import promise from '../w-redux/promise'

function countReducer(state = 10, action) {
  switch (action.type) {
    case 'ADD':
      return state + (action.payload || 1)
    case 'MINUS':
      return state - (action.payload || 1)
    default:
      return state
  }
}


function appReducer(state = { num: 1000 }, { type, payload }) {
  switch (type) {
    case 'ADD3':
      return {
        ...state,
        num: state.num + payload
      }
    default:
      return state
  }
}

const store = createStore(
  // countReducer,
  combineReducers({
    count: countReducer,
    app: appReducer
  }),
  applyMiddleware(thunk, promise, logger)
)

export default store