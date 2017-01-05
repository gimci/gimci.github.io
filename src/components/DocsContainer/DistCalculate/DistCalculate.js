/* Externals */
import React from 'react'
import { connect } from 'react-redux'

/* Internals */
import styles from './DistCalculate.scss'

let DistCalculate = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentArea}>
        <div className={styles.contentHeader}>
          Distance Calculator
        </div>
        <div className={styles.desc}>
          <p>Calcalate distance between two words.</p>
          <p>Took a reference with the following metrics.</p>
          <p>- Levenshtein Distance</p>
          <p>- Hamming Distance</p>

          `e.g) HammingDist(안녕,정녕) -> 1`
          `HammingDist(Annieng,jengnieng) -> 3`
          >
          로마자 전사를 통한 세분화된 distance측정으로 단어 사이의 연관성을 정밀하게 측정 할 수 있다.
        </div>
        <div className={styles.inputContainer}>
          <input
            id="dist1"
            type="text"/>
          <input
            id="dist2"
            type="text"/>
          <button
            className={styles.convertBtn}
            onClick={props.handleClickDist}>
            Get Distance</button>
        </div>
        <span>{props.distance}</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state/*, props*/) => ({
  
})

DistCalculate = connect(mapStateToProps)(DistCalculate)

export default DistCalculate
