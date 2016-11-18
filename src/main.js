/**
 * Document to be made..
 */

/* External Dependencies */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

/* Internal Dependencies */
import App from './containers/App'
import routes from './routes'

/****************************************************
 * Polyfills
 ****************************************************/
require('es6-promise').polyfill();
require('whatwg-fetch')
require('./style/normalize.css')


/****************************************************
 * Redux
 ****************************************************/
import { ReduxUtils } from './utils'
const store = ReduxUtils.createStore()



/****************************************************
 * Render via React
 ****************************************************/

render(
  routes, 
  document.getElementById('main')
)

                
