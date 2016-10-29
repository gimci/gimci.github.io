/**
 * document to be made..
 */
const map = {
  ㄱ: 'g',
  ㄴ: 'n',
  ㄷ: 'd',
  ㄹ: 'r',
  ㅁ: 'm',
  ㅂ: 'b',
  ㅅ: 's',
  ㅇ: '',
  ㅈ: 'j',
  ㅊ: 'c',
  ㅋ: 'k',
  ㅌ: 't',
  ㅍ: 'p',
  ㅎ: 'h',

  ㄲ: 'gg',
  ㄸ: 'dd',
  ㅃ: 'bb',
  ㅆ: 'ss',
  ㅉ: 'jj',

  ㄳ: 'gs',
  ㄵ: 'nj',
  ㄶ: 'nh',
  ㄺ: 'rg',
  ㄻ: 'rm',
  ㄼ: 'rb',
  ㄽ: 'rs',
  ㄾ: 'rt',
  ㄿ: 'rp',
  ㅀ: 'rh',
  ㅄ: 'bs',

  ㅏ: 'a',
  ㅐ: 'ai',
  ㅑ: 'ia',
  ㅒ: 'ai',
  ㅓ: 'e',
  ㅔ: 'ei',
  ㅕ: 'ie',
  ㅖ: 'iei',
  ㅗ: 'o',
  ㅘ: 'oa',
  ㅙ: 'oai',
  ㅚ: 'oi',
  ㅛ: 'io',
  ㅜ: 'u',
  ㅝ: 'ue',
  ㅞ: 'uei',
  ㅟ: 'ui',
  ㅠ: 'iu',
  ㅡ: 'y',
  ㅢ: 'yi',
  ㅣ: 'i',

}

export default function romanizor(text) {
  console.log(1, text)
  let ret = []

  for (let i = 0; i < text.length; i++) {
    ret.push( map[text[i]] )
  }



  return ret
}
