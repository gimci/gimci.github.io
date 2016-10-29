import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from './promiseMiddleware'
import reducers from '../reducers'

export default function(data) {
  var reducer = combineReducers(reducers)
  var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  var store = finalCreateStore(reducer, data)

  return store
}
