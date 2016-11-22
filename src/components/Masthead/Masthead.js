/* Externals */
import React from 'react'
import {connect} from 'react-redux'

/* Internals */
import styles from './Masthead.scss'


let Masthead = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentArea}>
        <span className={styles.logo}>
          Gimci
        </span>
        <span className={styles.desc}>
          Korean natural language library with a new metric of processing
        </span>
        <span className={styles.linkBtn}>
          <a href="https://github.com/gimci/gimci.github.io">
            <i className="fa fa-github" aria-hidden="true"/>
          </a>
        </span>
      </div>

    </div>
  )
}

const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

Masthead = connect(mapStateToProps)(Masthead)

export default Masthead

