/**
 * Created by nariyoon on 2016. 10. 25..
 */
import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Hamming.scss'
<<<<<<< HEAD
import * as HammingActionCreator from '../../actions/HammingActionCreator'
=======
import * as HammingActionCreator from '../../actionCreators/HammingActionCreator'
>>>>>>> exp
import * as Dom from '../../utils/DomUtils'

class Hamming extends React.Component {

<<<<<<< HEAD
  constructor() {
    super()
    this._refs = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const val1 = this._refs.inputFirst.value
    const val2 = this._refs.inputSecond.value
    this.props.dispatch(HammingActionCreator.convert(val1, val2))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          <input
            ref={elem1 => Dom.setRefToNode(this._refs, 'inputFirst', elem1)}
            type="text1"/>
          <input
            ref={elem2 => Dom.setRefToNode(this._refs, 'inputSecond', elem2)}
            type="text2"/>
          <button
            className={styles.convertBtn}
            onClick={this.handleClick}>convert</button>
        </div>
        <span>{this.props.converted}</span>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    converted: state.hamming.converted,
  }
=======
    constructor() {
        super()
        this._refs = {}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
      const val1 = this._refs.inputFirst.value
      const val2 = this._refs.inputSecond.value
      this.props.dispatch(HammingActionCreator.convert(val1, val2))
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div>
                    <input
                        ref={elem1 => Dom.setRefToNode(this._refs, 'inputFirst', elem1)}
                        type="text1"/>
                    <input
                        ref={elem2 => Dom.setRefToNode(this._refs, 'inputSecond', elem2)}
                        type="text2"/>
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
        converted: state.hamming.converted,
        reduxState: state
    }
>>>>>>> exp
}

const ConnectedHamming = connect(mapStateToProps)(Hamming)

export default ConnectedHamming

