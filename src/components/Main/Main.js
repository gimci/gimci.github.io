import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Main.scss'
import * as GimciActionCreator from '../../actions/GimciActionCreator'
import * as Dom from '../../utils/DomUtils'

class Content extends React.Component {

  constructor() {
    super()
    this._refs = {}
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  handleClick(event) {
    const val = this._refs.input.value
    this.props.dispatch(GimciActionCreator.convert(val))
    // this.props.dispatch(GimciActionCreator.romanize(val))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          <input
            ref={elem => Dom.setRefToNode(this._refs, 'input', elem)}
            type="text"/>
          <button
            className={styles.convertBtn}
            onClick={this.handleClick}>convert</button>
        </div>
        <span>
          {this.props.converted}
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    converted: state.gimci.converted,
    reduxState: state
  }
}

const ConnectedContent = connect(mapStateToProps)(Content)

export default ConnectedContent

