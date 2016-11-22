/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './App$.scss'
import Masthead_ from '../../components/Masthead'
import Main$ from '../../containers/Main$'
import Hamming from '../../components/Hamming'
import BayesCorrection from '../../components/BayesCorrection'

class App$ extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Masthead_/>

      </div>
    )
  }

}

export default App$
