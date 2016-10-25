/* External Dependencies */
import React from 'react'
require('es6-promise').polyfill();
require('whatwg-fetch')
import { Provider } from 'react-redux'

/* Internal Dependencies */
require('../../style/normalize.css')

import styles from './App.scss'
import createStore from '../../redux/main'
import Header from '../../components/Header'
import Intro from '../../components/Intro'
import Gimci from '../../components/Gimci'
import Hamming from '../../components/Hamming'

const store = createStore()

class App extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <div className={styles.wrapper}>
          <Header/>
          <Intro/>
          <Gimci/>
          <Hamming/>
        </div>
      </Provider>
    )
  }

}

export default App
