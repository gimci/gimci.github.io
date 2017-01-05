/* Externals */
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

/* Internals */
import styles from './Search.scss'


let Search = (props) => {
  return (
    <div className={styles.wrapper}>
      <input
        id="gimci-query"
        type="text"
        className={styles.input}/>
      <div
        className={classNames(styles.btn, styles.searchBtn)}
        onClick={props.handleClickSearch}>
        See the world in a more accurate way
      </div>
      <div
        className={styles.btn}
        onClick={props.handleClickWhat}>
        What is it all about?
      </div>
    </div>
  )
}

const mapStateToProps = (state/*, props*/) => ({

})

Search = connect(mapStateToProps)(Search)

export default Search
