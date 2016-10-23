/* External Dependencies */
import React from 'react'
require('es6-promise').polyfill();
require('whatwg-fetch')

/* Internal Dependencies */
require('../../style/normalize.css')

import styles from './App.scss'

class App extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    )
  }

}

export default App
