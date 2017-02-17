export default function _gimci(state = {}, action) {
  console.log('_gimci', state, action);

  switch (action.type) {

    case 'ROMANIZE':
      return {
        ...state,
        converted: action.payload
      }

    case 'SEARCH':
      console.log(1, action.payload)
      return {
        ...state,
        searchRes: action.payload.result
      }

    case 'CLEAR':
      return {
        ...state,
        searchRes: action.payload
      }

    default:
      return state
  }
}
