/**/
import React from 'react'
import { Router, Route, Link, browserHistory, useRouterHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history'

/* Internals */
import AppContainer from './components/AppContainer'
import DocsContainer from './components/DocsContainer'


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
        <Route path="docs" component={DocsContainer}/>
      </Route>
    </Router>
  </Provider>
)
