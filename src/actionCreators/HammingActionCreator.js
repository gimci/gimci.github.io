/**
 * Created by nariyoon on 2016. 10. 25..
 */
import Hamming from '../modules/Hamming'

export function convert(text1, text2) {
    return {
        types: ['CONVERT_REQUEST', 'CONVERT_SUCCESS', 'GET_TIME_FAILURE'],
        promise: () => {

            return new Promise((resolve, reject) => {
                resolve(Hamming(text1, text2))
            })
        }
    }
}
