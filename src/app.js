/**/
import React from 'react'
import { Router, Route, Link, browserHistory, useRouterHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history'

/* Internals */
import App from './components/App'

/************************************************************
 * Redux
 ************************************************************/
import { Provider } from 'react-redux'
import { ReduxUtils } from './utils'
const store = ReduxUtils.store()


export default (
  <Provider store={store}>
    <App/>
  </Provider>
)
