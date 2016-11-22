import Hamming from '../modules/HammingDistCalculator'
import Gimci from '../modules/Gimci'
import AT from './ActionTypes'
import createAction from './createAction'

export default {
  
  calculate: (arg) => {
  
    const converted1 = Gimci.romanize(arg.text1)
    const converted2 = Gimci.romanize(arg.text2)
    
    
    
    return createAction(AT.CALC_DISTANCE, Hamming(converted1, converted2))
    
  }
}
