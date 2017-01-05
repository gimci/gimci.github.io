/**/
import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './DocsContainer.scss'
import { gimciActions } from '../../actions'
import DistCalculate from './DistCalculate'
import Romanization from './Romanization'
import Motivations from './Motivations'
import GetStarted from './GetStarted'
import Abstract from './Abstract'
import Apis from './Apis'


class DocsContainer extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.contentArea}>
          <Abstract/>
          <Motivations/>
          <Romanization/>
          <GetStarted/>
          <Apis/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => ({

})

DocsContainer = connect(mapStateToProps)(DocsContainer)

export default DocsContainer
