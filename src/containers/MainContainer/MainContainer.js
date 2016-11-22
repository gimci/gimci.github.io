import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './MainContainer.scss'
import * as GimciActionCreator from '../../actions/GimciActionCreator'
import * as Dom from '../../utils/DomUtils'
import DistCalculate from '../../components/DistCalculate'
import SpellCorrect from '../../components/SpellCorrect'
import Romanize from '../../components/Romanize'
import Motivation from '../../components/Motivation'
import GetStarted from '../../components/GetStarted'
import { GimciActions, DistActions, CorrectActions } from '../../actions'


class MainContainer extends React.Component {
  
  constructor() {
    super()
    this.handleClickRomanize = this.handleClickRomanize.bind(this)
    this.handleClickDist = this.handleClickDist.bind(this)
    this.handleClickCorrect = this.handleClickCorrect.bind(this)
  }

  handleClickRomanize(event) {
    var input = document.getElementById('romanize')
    this.props.dispatch(GimciActions.convert(input.value))
  }

  handleClickDist(event) {
    var text1 = document.getElementById('dist1').value
    var text2 = document.getElementById('dist2').value
    this.props.dispatch(DistActions.calculate({text1, text2}))
  }

  handleClickCorrect() {
    var test = document.getElementById('correct').value
    this.props.dispatch(CorrectActions.calcBayes(test))
  }
  
  render() {
    console.log(1, this.props.distance)
    return (
      <div className={styles.wrapper}>
        <div className={styles.contentArea}>
          <Motivation/>
          <GetStarted/>
          <Romanize 
            handleClickRomanize={this.handleClickRomanize}
            romanized={this.props.romanized}/>
          <DistCalculate 
            handleClickDist={this.handleClickDist}
            distance={this.props.distance}/>
          <SpellCorrect 
            handleClickCorret={this.handleClickCorrect}
            corrected={this.props.corrected}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    converted: state.gimci.converted,
    distance: state.hamming.distance,

    reduxState: state
  }
}

MainContainer = connect(mapStateToProps)(MainContainer)

export default MainContainer

