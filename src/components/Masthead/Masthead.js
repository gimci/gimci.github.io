/* Externals */
import React from 'react'
import {connect} from 'react-redux'

/* Internals */
import styles from './Masthead.scss'


const Masthead = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.headerBackground}> Gimci Page </p>
    </div>
  )
}

const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

const Masthead = connect(mapStateToProps)(Masthead)

export default Masthead

