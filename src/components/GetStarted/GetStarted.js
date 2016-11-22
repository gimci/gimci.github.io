/* Externals */
import React from 'react'
import { connect } from 'react-redux'

/* Internals */
import styles from './GetStarted.scss'


var code =
  `npm install --save gimci`

let Motivation = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentHeader}>
        Getting Started
      </div>
      <div className={styles.desc}>
        <p>
          Gimci, as of Nov 2016, is implemented in JavaScript, with the view of making i runnable at both
          web web browsers and native operating systems. For install, use npm with Node.js.
        </p>
        <p className={styles.blankLine}></p>
        <pre>
          <code className="language-javascript">{code}</code>
        </pre>
      </div>
    </div>
  )
}

const mapStateToProps = (state/*, props*/) => {
  return {
    converted: state.gimci.converted,
    reduxState: state
  }
}

Motivation = connect(mapStateToProps)(Motivation)

export default Motivation

