import Gimci from '../modules/Gimci'

export function convert(text) {
  return {
    types: ['CONVERT_REQUEST', 'CONVERT_SUCCESS', 'GET_TIME_FAILURE'],
    promise: () => {

      return new Promise((resolve, reject) => {
        resolve(Gimci(text))
      })
    }
  }
}
