
import Bayes from '../modules/BayesCorrectionCalculator'
import Gimci from '../modules/Gimci'
import AT from './ActionTypes'
import createAction from './createAction'


export default {
  calcBayes: (arg) => {

    const converted1 = Gimci.romanize(arg)

    return createAction(AT.CORRECT, thatBayes.edits1([converted1]))
  }
}
