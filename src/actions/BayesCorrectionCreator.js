
import Bayes from '../modules/BayesCorrectionCalculator'
import Gimci from '../modules/Gimci'
import AT from '../constants/ActionTypes'

export function calcBayes(text) {
  return {
    types: [AT.BAYES_CALC_REQUEST, AT.BAYES_CALC_SUCCESS, AT.BAYES_CALC_FAILURE],
    promise: () => {

      return new Promise((resolve, reject) => {

        const converted1 = Gimci.romanize(text)

        var thatBayes = Bayes()
        resolve(thatBayes.edits1([converted1]))
      })
    }
  }
}
