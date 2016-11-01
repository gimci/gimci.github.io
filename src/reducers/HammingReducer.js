import AT from '../constants/ActionTypes'

export default function _hamming(state = {}, action) {
    console.log('_hamming', state, action);

    switch (action.type) {
        case AT.HAMMING_CALC_REQUEST:
            return {
                ...state
            }
        case AT.HAMMING_CALC_SUCCESS:
            return {
                ...state,
                converted: action.result
            }
        case AT.HAMMING_CALC_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}
