/**
 * Document to be made..
 */

/* External Dependencies */
import React from 'react'
import { render } from 'react-dom'

/* Internal Dependencies */
import routes from './routes'

/****************************************************
 * External Libraries
 ****************************************************/
require('es6-promise').polyfill();
require('whatwg-fetch')


/****************************************************
 * Global Styles
 ****************************************************/
require('./styles/normalize.css')
require('./styles/reset.scss')
require('./styles/global.scss')
require('./styles/font-awesome/css/font-awesome.min.css')
require('./styles/prism/prism.css')


/****************************************************
 * Render via React
 ****************************************************/

render(
  routes,
  document.getElementById('main')
)
