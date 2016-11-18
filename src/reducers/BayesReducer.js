export default function _bayes(state = {}, action) {
  console.log('_bayes', state, action);

  switch (action.type) {
    case 'BAYES_REQUEST':
      return {
        ...state
      }
    case 'BAYES_SUCCESS':
      return {
        ...state,
        converted: action.result
      }
    case 'BAYES_FAILURE':
      return {
        ...state,
      }
    default:
      return state
  }
}
