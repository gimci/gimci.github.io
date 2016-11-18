/**/
import React from 'react'
import { Router, Route, Link, browserHistory, useRouterHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history'

/* Internals */
import App$ from './containers/App$'

/************************************************************
 * Redux
 ************************************************************/
import { Provider } from 'react-redux'
import { ReduxUtils } from './utils'
const store = ReduxUtils.createStore()


export default (
  <Provider store={store()}>
    <Router history={browserHistory}>
      <Route path="/" component={App$}>
      </Route>
    </Router>
  </Provider>
)
