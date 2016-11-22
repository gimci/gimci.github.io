import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

export default {
  store: function() {
    var combinedReducer = combineReducers(reducers)
    return createStore(
      combinedReducer,
      applyMiddleware(thunk)
    )
  }
}
