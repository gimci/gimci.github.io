// import { search, convertHangyrToRoman } from 'gimci'
import AT from './ActionTypes'
import createAction from './createAction'

export default {
  search: null,
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
