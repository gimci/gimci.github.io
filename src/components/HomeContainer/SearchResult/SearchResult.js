/* Externals */
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

/* Internals */
import styles from './SearchResult.scss'


let SearchResult = (props) => {
  console.log(2, props.searchResult)
  const res = props.searchResult
  return (
    <div className={classNames(styles.wrapper, {['hide']: !res})}>
      <div className={styles.content}>
        <div className={styles.title}>
          <span className={styles.query}>{res ? res.query : ''}</span>
          <span className={styles.romanized}>{res ? res.romanized : ''}</span>
        </div>
        <div className={styles.searchResult}>
          <p>
            <span>tier1: </span><span>{res ? res.searchResult.tier1.toString() : ''}</span>
          </p>
          <p>
            <span>tier2: </span><span>{res ? res.searchResult.tier2.toString() : ''}</span>
          </p>
          <p>
            <span>tier3: </span><span>{res ? res.searchResult.tier3.toString() : ''}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state/*, props*/) => ({

})

SearchResult = connect(mapStateToProps)(SearchResult)

export default SearchResult
