/* Externals */
import React from 'react'
import { connect } from 'react-redux'

/* Internals */
import styles from './SpellCorrect.scss'
import * as HammingActionCreator from '../../actions/HammingActionCreator'
import * as Dom from '../../utils/DomUtils'

let SpellCorrect = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentArea}>
        <div className={styles.contentHeader}>
          Spell Correction
        </div>
        <div className={styles.desc}>
        </div>
        <div className={styles.inputContainer}>
          <input
            id="correct"
            type="text"/>
          <button
            className={styles.convertBtn}
            onClick={props.handleClickCorrect}>
            Get Distance</button>
        </div>
        <span>{props.corrected}</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state/*, props*/) => {
  return {
    converted: state.hamming.converted,
  }
}

SpellCorrect = connect(mapStateToProps)(SpellCorrect)

export default SpellCorrect

