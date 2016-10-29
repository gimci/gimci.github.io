/**
 * Created by nariyoon on 2016. 10. 25..
 */
import Hamming from '../modules/hamming'

export function convert(text1, text2) {
    return {
        types: ['HAMMING_REQUEST', 'HAMMING_SUCCESS', 'HAMMING_FAILURE'],
        promise: () => {

            return new Promise((resolve, reject) => {
                resolve(Hamming(text1, text2))
            })
        }
    }
}
