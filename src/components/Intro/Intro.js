import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Intro.scss'

class Home extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={styles.wrapper}>
        <p className={styles.subTitle}> Welcome to Gimchi Pages </p>
          <p> 문제점 제시</p>
          <p> 기존의 공공 지표 전사법이 통일 되어 있지 않음</p>
          <p> 해결방법 제시</p>
          <p> 통일된 로마자 전사법 제시ㄴ</p>
        <p className={styles.subTitle}> 자소 분리 체험 하기 </p>
        <p> 문장을 입력해 보세요.</p>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome

