/**/
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

/**/
require('es6-promise').polyfill();
require('whatwg-fetch')
require('./style/normalize.css')

import createStore from './redux'
const store = createStore()

/**/
import App from './containers/App'

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('main')
)

                
