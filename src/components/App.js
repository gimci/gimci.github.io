/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'


/* Internal Dependencies */
// import styles from './AppContainer.scss'
import { gimciActions } from '../actions'

class App extends React.Component {

  constructor() {
    super()
    this.input = null
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    this.input.focus()
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log('query', e.target.value)
      this.props.dispatch(gimciActions.search(e.target.value))
    }
  }

  render() {
    console.log('state', this.props.state)
    return (
      <div id="reactRoot">
        <div className="logo">
          Getjeri Beta 0.01
        </div>
        <input
          ref={elem => {this.input = elem}}
          className="input"
          type="text"
          onKeyPress={this.handleKeyPress}/>
        <div className="result">
          {this.props.searchRes}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state/*, props*/) => ({
  state: state,
  searchRes: state.gimciReducer.searchRes
})

App = connect(mapStateToProps)(App)


export default App
