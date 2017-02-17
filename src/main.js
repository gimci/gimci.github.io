import React from 'react'
import ReactDOM from 'react-dom'
import app from './app'

require('./styles/style.scss');
require('es6-promise').polyfill();
require('whatwg-fetch')

document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById('tryitout').addEventListener("click", () => {
    ReactDOM.render(
      app,
      document.getElementById('gimciBase'),
    )
  })

});