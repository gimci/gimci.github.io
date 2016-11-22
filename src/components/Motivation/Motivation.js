import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Romanize.scss'

let Romanize = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentHeader}>
        Romanize
      </div>
      <div className={styles.desc}>
        <p>
          Characters of <span className={styles.highlight}>Hangul</span> consist of two to three letters.
          : Initial (초성), Medial (중성), Final (종성).
        </p>

        <p>
          유니코드 (UTF-8) 에 약간 수의 한글 표기법 존재하는데 이중 Hangul Compatibility Jamo을 사용하였습니다.
          http://www.unicode.org/charts/PDF/U3130.pdf

          입력된 글자 (Character) 를 낱자 (Letter) 의 배열로 변환하는 작업을 합니다.
          유니코드에 등재된 한글 자모의 규칙을 분석하여 알고리즘 구현하였습니다.
        </p>
        <p>
          일대일 대응의 기본적인 원칙 (i), 모든 경우 표현 (ii), 최소화 된 방식(iii)을 모두 만족하며, 후쿠이 레이 전사법 (1989’) 을 참고한 전사법 고안 (박승현 전사법)
        </p>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.inputContainer}>
          <input
            id="romanize"
            type="text"/>
          <button
            className={styles.convertBtn}>
            Romanize
          </button>
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

