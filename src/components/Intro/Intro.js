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
        header
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

