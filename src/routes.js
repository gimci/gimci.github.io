import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import App from './containers/App/App'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import Home from './components/Home'
import createStore from './redux/main'


const store = createStore()

function authCheck(nextState, replaceState) {
  console.log('auth check')
  if (true) {
    replaceState('/home')
  }
}

export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute onEnter={authCheck}/>
        <Route path="signup" component={Signup}/>
        <Route path="signin" component={Signin}/>
        <Route path="home" component={Home}>

        </Route>
      </Route>
    </Router>
  </Provider>
  
)


