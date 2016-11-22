/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './AppContainer.scss'
import Masthead from '../../components/Masthead'
import MainContainer from '../../containers/MainContainer'
import Intro from '../../components/Intro'

class AppContainer extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Masthead/>
        <Intro/>
        <MainContainer/>
      </div>
    )
  }

}

export default AppContainer
