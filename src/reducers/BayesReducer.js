export default function _bayes(state = {}, action) {
  console.log('_bayes', state, action);

  switch (action.type) {
    case 'CORRECT':
      return {
        ...state,
        corrected: action.payload
      }
    default:
      return state
  }
}
