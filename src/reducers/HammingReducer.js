import AT from '../actions/ActionTypes'


export default function _hamming(state = {}, action) {
    console.log('_hamming', state, action);


    switch (action.type) {
        case AT.CALC_DISTANCE:
          console.log(2, action.payload)
            return {
                ...state,
                distance: action.payload
            }

        default:
            return state
    }
}
