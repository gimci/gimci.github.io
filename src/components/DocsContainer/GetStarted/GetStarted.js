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
          web web browsers and native operating systems. Start by installing
          via npm (node.js)
        </p>
        <pre>
          <code className="language-javascript">{code}</code>
        </pre>
      </div>
    </div>
  )
}

export default Motivation
