import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from './promiseMiddleware'
import thunk from 'redux-thunk'
import reducers from '../reducers'

export default function() {
  var combinedReducer = combineReducers(reducers)
  var store = createStore(
    combinedReducer,
    applyMiddleware(thunk)
  )

  return store
}
