/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './App.scss'
import Header from '../../components/Header'
import Intro from '../../components/Intro'
import Main from '../../components/Main'
import Hamming from '../../components/Hamming'


class App extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Header/>
        <Intro/>
        <Main/>
        <Hamming/>
      </div>
    )
  }

}

export default App
