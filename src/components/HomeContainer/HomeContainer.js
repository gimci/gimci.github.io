/* Externals */
import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { withRouter } from 'react-router'

/* Internals */
import styles from './HomeContainer.scss'
import Search from './Search'
import SearchResult from './SearchResult'
import { gimciActions } from '../../actions'


class HomeContainer extends React.Component {

  constructor() {
    super()
    this.handleClickSearch = this.handleClickSearch.bind(this)
    this.handleClickWhat = this.handleClickWhat.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(gimciActions.clear())
  }

  handleClickWhat() {
    this.props.router.push('/docs')
  }

  handleClickSearch(e) {
    let query = document.getElementById('gimci-query').value
    console.log('query', query)
    this.props.dispatch(gimciActions.search({
      query
    }))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Search
          handleClickSearch={this.handleClickSearch}
          handleClickWhat={this.handleClickWhat}/>
        <SearchResult
          searchResult={this.props.searchResult}/>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => ({
  searchResult: state.gimciReducer.searchResult
})

HomeContainer = connect(mapStateToProps)(HomeContainer)
HomeContainer = withRouter(HomeContainer)

export default HomeContainer
