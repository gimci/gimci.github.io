import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Main$.scss'
import * as GimciActionCreator from '../../actions/GimciActionCreator'
import * as Dom from '../../utils/DomUtils'


class Main$ extends React.Component {
  
  constructor() {
    super()
  }
  
  render() {
    
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    converted: state.gimci.converted,
    reduxState: state
  }
}

Main$ = connect(mapStateToProps)(Main$)

export default Main$

