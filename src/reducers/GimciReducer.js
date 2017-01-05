export default function _gimci(state = {}, action) {
  console.log('_gimci', state, action);

  switch (action.type) {

    case 'ROMANIZE':
      return {
        ...state,
        converted: action.payload
      }

    case 'SEARCH':
        return {
          ...state,
          searchResult: action.payload
        }

    case 'CLEAR':
      return {
        ...state,
        searchResult: action.payload
      }

    default:
      return state
  }
}
