/**
 * Created by nariyoon on 2016. 10. 25..
 */
export default function _hamming(state = {}, action) {
    console.log('_hamming', state, action);

    switch (action.type) {
        case 'CONVERT_REQUEST':
            return {
                ...state
            }
        case 'CONVERT_SUCCESS':
            console.log(2, action)
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
