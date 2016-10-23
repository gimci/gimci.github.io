export default function _time(state = {}, action) {
  console.log('_time', state, action);

  switch (action.type) {
    case 'GET_TIME_REQUEST':
      return {
        ...state,
        frozen: true
      }
    case 'GET_TIME_SUCCESS':
      return {
        ...state,
        time: action.result.time,
        frozen: false
      }
    case 'GET_TIME_FAILURE':
      return {
        ...state,
        frozen: false
      }
    default:
      return state
  }
}
