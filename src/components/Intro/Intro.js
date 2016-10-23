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
       <p className={styles.h3Text}> Welcome to Gimchi Pages </p>
        <p> 현재 사이트 구성 중입니다.</p>
        <p className={styles.h3Text}> 자소 분리 체험 하기 </p>
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

