/**/
import React from 'react'
import { Router, Route, Link, browserHistory, useRouterHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history'

/* Internals */
import AppContainer from './containers/AppContainer'


/************************************************************
 * Redux
 ************************************************************/
import { Provider } from 'react-redux'
import { ReduxUtils } from './utils'
const store = ReduxUtils.store()


export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
      </Route>
    </Router>
  </Provider>
)
