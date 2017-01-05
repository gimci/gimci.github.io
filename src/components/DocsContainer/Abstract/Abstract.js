import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Abstract.scss'

let Abstract = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentHeader}>
        Korean natural language library with a new unit of processing
      </div>
      <div className={styles.desc}>
        <p>
          Hangul looks like, in a perspective, rather an intricate system especially
          when you want the machine to understand it. The history of researching on
          how to process Hangul is not mature enough, which also does not help to deal
          with the text data of Korean writing system. Nonetheless, it is a systematically
          built alphabet and tons of clues are to be discovered in order for us
          to deal with it easier than now.
        </p>
        <p className={styles.blankLine}/>
        <p>
          <b>Gimci</b> is designed to tackle the issues lingering over the handling of
          Hangul and boost the overall performance. It is also expected that people
          will benefit not only in a technological part, but also in understanding
          the general linguistic aspect of the writing system.
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = (state/*, props*/) => ({

})

Abstract = connect(mapStateToProps)(Abstract)

export default Abstract
