import Gimci from '../modules/Gimci'
import AT from '../constants/ActionTypes'

export function convert(text) {
  return {
    types: [AT.CONVERT_REQUEST, AT.CONVERT_SUCCESS, AT.CONVERT_FAILURE],
    promise: () => {

      return new Promise((resolve, reject) => {
        const converted = Gimci.romanize(text)
        resolve(converted)
      })
    }
  }
}
