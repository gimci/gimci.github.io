import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Header.scss'

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
        <background className={styles.headerBackground}>
            <h3 className={styles.titleFont}>Gimci Page</h3>
        </background>
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

