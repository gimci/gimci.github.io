/* Externals */
import React from 'react'
import { connect } from 'react-redux'
import {PrismCode} from 'react-prism'

/* Internals */
import styles from './Romanize.scss'
import { GimciActions } from '../../actions'



const code =
  `
  {ko: 'ㄱ', ro: 'g', uni: 0x3131},
  {ko: 'ㄲ', ro: 'G', uni: 0x3132},
  {ko: 'ㄴ', ro: 'n', uni: 0x3134},
  {ko: 'ㄷ', ro: 'd', uni: 0x3137},
  {ko: 'ㄸ', ro: 'D', uni: 0x3138},
  {ko: 'ㄹ', ro: 'r', uni: 0x3139},
  {ko: 'ㅁ', ro: 'm', uni: 0x3141},
  {ko: 'ㅂ', ro: 'b', uni: 0x3142},
  {ko: 'ㅃ', ro: 'B', uni: 0x3143},
  {ko: 'ㅅ', ro: 's', uni: 0x3145},
  {ko: 'ㅆ', ro: 'S', uni: 0x3146},
  {ko: 'ㅇ', ro: '', uni: 0x3147}, // 11th
  {ko: 'ㅈ', ro: 'j', uni: 0x3148},
  {ko: 'ㅉ', ro: 'J', uni: 0x3149},
  {ko: 'ㅊ', ro: 'c', uni: 0x314a},
  {ko: 'ㅋ', ro: 'k', uni: 0x314b},
  {ko: 'ㅌ', ro: 't', uni: 0x314c},
  {ko: 'ㅍ', ro: 'p', uni: 0x314d},
  {ko: 'ㅎ', ro: 'h', uni: 0x314e}
  `

let Romanize = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentHeader}>
        Romanize
      </div>
      <div className={styles.desc}>
        <p>
          일대일 대응의 기본적인 원칙 (i), 모든 경우 표현 (ii), 최소화 된 방식(iii)을 모두 만족하며, 후쿠이 레이 전사법 (1989’) 을 참고한 전사법 고안 (박승현 전사법)
        </p>
        <p>
          <span className={styles.han}>ㄱ</span><span className={styles.rom}></span>
        </p>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.inputContainer}>
          <input
            id="romanize"
            type="text"/>
          <button
            className={styles.convertBtn}
            onClick={props.handleClickRomanize}>
            Romanize
          </button>
        </div>
        <div>
          {props.converted}
        </div>
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

Romanize = connect(mapStateToProps)(Romanize)

export default Romanize

