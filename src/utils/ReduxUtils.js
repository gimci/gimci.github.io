import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

export default {
  createStore: function() {
    var combinedReducer = combineReducers(reducers)
    var store = createStore(
      combinedReducer,
      applyMiddleware(thunk)
    )

    return store
  }
}
