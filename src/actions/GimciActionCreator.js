// import { search, convertHangyrToRoman } from 'gimci'
import AT from './ActionTypes'
import createAction from './createAction'

// const HOST = 'http://52.79.132.50:3000'
const HOST = 'http://localhost:3000'

export default {

  search: (query) => (dispatch, getState) => {
    return fetch(`${HOST}/search/${query}`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        return dispatch(createAction(AT.SEARCH, res))
      })
  },
  convert: null,
  clear: null
}

// export default {
//   search: (args) => (dispatch, getState) => {
//
//     let res = {
//       query: args.query,
//       searchResult: search(args.query),
//       romanized: convertHangyrToRoman(args.query)
//     }
//     console.log(22, res)
//     return dispatch(createAction(AT.SEARCH, res))
//   },
//
//   convert: (args) => {
//     return createAction(AT.ROMANIZE, Gimci.romanize(args.hangyr))
//   },
//
//   clear: (args) => {
//     return createAction(AT.CLEAR, null)
//   }
// }
