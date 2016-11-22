import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Motivation.scss'

let Motivation = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentHeader}>
        Motivation
      </div>
      <div className={styles.desc}>
        <p>
          Characters of <span className={styles.highlight}>Hangul</span> consist of two to three letters.
          : Initial (초성), Medial (중성), Final (종성). Traditional models parses the text by each
          character which has total possibilities of <span className={styles.highlight}>11172</span>. (Initial 19 * Medial 21 * Final 28)
          Now by looking at the letters, we only have <span className={styles.highlight}>40</span>. (Standard 24 + Combined 16)
        </p>
        <p className={styles.blankLine}/>
        <p>
          This means we have less amount of calculation which will result in shorter amount of time span.
          Moreover, we will be able to track a relationship between each letter and may end up with
          devisable, but not yet used combination of letters (new expressions or vocabularies) voluming up the language itself.
        </p>
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

