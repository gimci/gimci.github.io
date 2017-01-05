import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Romanization.scss'

let Romanization = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentHeader}>
        Romanization
      </div>
      <div className={styles.desc}>
        <p>
          A new set of rule was essential in changing the way Hangul is treated.
          <b>Bagsynghien Rule (박승현 전사법)</b>, largely influenced by a prior work
          of Fukui Rei was devised.
        </p>
        <p className={'blankLine'}/>
        <p>
          The new rule converts each of Hangul letter into Roman alphabet without
          so much of exceptions. It also has several characteristics, such that
          according to the rul,e diphthongs are all modularized into a single vowel.
        </p>
        <p className={'blankLine'}/>
        <p>
          <div className={styles.ruleTable}>
            <div className={styles.row}>
              <p className={styles.group}>
                <span>ㄱ</span>
                <span>g</span>
              </p>
              <p className={styles.group}>
                <span>ㄴ</span>
                <span>n</span>
              </p>
              <p className={styles.group}>
                <span>ㄷ</span>
                <span>d</span>
              </p>
              <p className={styles.group}>
                <span>ㄹ</span>
                <span>r</span>
              </p>
              <p className={styles.group}>
                <span>ㅁ</span>
                <span>m</span>
              </p>
              <p className={styles.group}>
                <span>ㅂ</span>
                <span>b</span>
              </p>
              <p className={styles.group}>
                <span>ㅅ</span>
                <span>s</span>
              </p>
              <p className={styles.group}>
                <span>ㅇ</span>
                <span>&phi;</span>
              </p>
              <p className={styles.group}>
                <span>ㅊ</span>
                <span>c</span>
              </p>
              <p className={styles.group}>
                <span>ㅋ</span>
                <span>k</span>
              </p>
            </div>
            <div className={styles.row}>
              ...
            </div>
          </div>
        </p>
      </div>
    </div>
  )
}

export default Romanization
