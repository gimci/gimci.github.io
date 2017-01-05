import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Motivations.scss'

let Motivations = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentHeader}>
        Motivations
      </div>
      <div className={styles.desc}>
        <p>
          <span className={'highlight'}>Hangul</span> characters are each composed of
          two to three letters (constructing block, 낱자): Initial (초성), Medial (중성), Final (종성).
          Traditional langauge processing models of Hangul handled the text with
          the unit of character meaning it considered the total possibilities of
          <span className={'highlight'}>11172</span>. (Initial 19 * Medial 21 * Final 28)
          when dealing with the next character to come. This is a tremendous amount
          if you scale up the volume to be processed.
        </p>
        <p className={styles.blankLine}/>
        <p>
          Now if we can, at all, treat it by the unit of 'letter', the problem
          may shrink excessively. (Rough calculation dictates that we have
          <span className={styles.highlight}>40</span> (Standard 24 + Combined 16)
          possibilities to lookahead)
        </p>
        <p className={styles.blankLine}/>
        <p>
          Quite a jump in the overall performance! But how could we possibly achieve
          this? An idea of constructing a wholly new set of Romanization began here.
          it later turned out that the new rule also shed a light to a relationship
          between each letter of Hangul.
        </p>
      </div>
    </div>
  )
}

export default Motivations
