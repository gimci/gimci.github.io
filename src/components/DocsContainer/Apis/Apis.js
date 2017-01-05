import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Apis.scss'

let Apis = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentHeader}>
        Apis
      </div>
      <div className={styles.desc}>
        <p>
          API document is being constructed. Check out
          <a href="https://github.com/gimci/gimci"> Docs</a>.
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = (state/*, props*/) => ({

})

Apis = connect(mapStateToProps)(Apis)

export default Apis
