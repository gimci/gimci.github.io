export default function _gimci(state = {}, action) {
  console.log('_gimci', state, action);

  switch (action.type) {
    case 'CONVERT_REQUEST':
      return {
        ...state
      }
    case 'CONVERT_SUCCESS':
      return {
        ...state,
        converted: action.result
      }
    case 'CONVERT_FAILURE':
      return {
        ...state,
      }
    default:
      return state
  }
}
