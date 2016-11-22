import Gimci from '../modules/Gimci'
import AT from './ActionTypes'
import createAction from './createAction'

export default {
  convert: (arg) => {
    return createAction(AT.ROMANIZE, Gimci.romanize(arg))
  }
}
