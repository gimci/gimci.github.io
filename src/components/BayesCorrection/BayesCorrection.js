import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './BayesCorrection.scss'
import * as BayesCorrectionCreator from '../../actions/BayesCorrectionCreator'
import * as Dom from '../../utils/DomUtils'

class BayesCorrection extends React.Component {

  constructor() {
    super()
    this._refs = {}
    this.result = []
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const val1 = this._refs.inputFirst.value
    this.props.dispatch(BayesCorrectionCreator.calcBayes(val1))
  }

  componentWillMount() {
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={styles.wrapper}>
        <input
          ref={elem1 => Dom.setRefToNode(this._refs, 'inputFirst', elem1)}
          type="text1"/>
        <button
          className={styles.convertBtn}
          onClick={this.handleClick}>Calculate</button>
        <span>{this.props.converted}</span>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    converted: state.bayes.converted,
  }
}

const ConnectedBayesCorrection = connect(mapStateToProps)(BayesCorrection)

export default ConnectedBayesCorrection

