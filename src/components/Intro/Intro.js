import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Intro.scss'

let Intro = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentArea}>
        <p className={styles.title}>ㄱㅣㅁㅊㅣ</p>
        <p>
          Processing Korean with the character-based metric costs not only the amount of calculation
          but it also reaps the accuracy off. Meet the letter-based processing with the newly devised
          Korean-Roman rule. <b>Gimci</b> is designed to boost the overall performance of Natural Language Processing
          models of Korean, and improve understanding of the Korean writing system in a remarkably different way.
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

Intro = connect(mapStateToProps)(Intro)

export default Intro

