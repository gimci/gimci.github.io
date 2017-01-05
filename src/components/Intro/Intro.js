/* Externals */
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

/* Internals */
import styles from './Intro.scss'


// const renderLogo = () => (
//   <svg height="50" width="200">
//     <text className={styles.engText} x="0" y="40" textLength="200">
//       gimci
//     </text>
//   </svg>
// )
//
// const renderLogoKor = () => (
//   <svg className={''} height="50" width="200">
//     <text className={styles.korText} x="0" y="40" textLength="200">
//       ㄱㅣㅁㅊㅣ
//     </text>
//   </svg>
// )

let Intro = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentArea}>
        <div className={styles.logo}></div>
        <div className={styles.title}>
          <div className={styles.eng}>
            <p><span>g</span></p>
            <p><span>i</span></p>
            <p><span>m</span></p>
            <p><span>c</span></p>
            <p><span>i</span></p>
          </div>
          <div className={styles.kor}>
            <p><span>ㄱ</span></p>
            <p><span>ㅣ</span></p>
            <p><span>ㅁ</span></p>
            <p><span>ㅊ</span></p>
            <p><span>ㅣ</span></p>
          </div>
        </div>
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
