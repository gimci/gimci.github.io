/* Externals */
import React from 'react'
import { connect } from 'react-redux'

/* Internals */
import styles from './Masthead.scss'

const renderTextLogo = (props) => {
  if (true) {
    return (
      <span
        className={styles.textLogo}
        onClick={props.handleClickLogo}>
        GIMCI
      </span>
    )
  }
}

let Masthead = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentArea}>
        <div className={styles.leftBtnGroup}>
          {renderTextLogo(props)}
        </div>
        <div className={styles.rightBtnGroup}>
          <span onClick={props.handleClickDocs}>
            Docs
          </span>
          <span onClick={props.handleClickGithub}>
            Github
          </span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state/*, props*/) => ({

})

Masthead = connect(mapStateToProps)(Masthead)

export default Masthead
