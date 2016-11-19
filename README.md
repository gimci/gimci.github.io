##Gimchi
한글 자연어 처리를 위한 자바스크립트 오픈소스 라이브러리
JavaScript Open Source Library for Korean NLP


##Rominize
####한글자소분리
한글은 초성, 중성, 종성으로 구성되어 있습니다. 유니코드 (UTF-8) 에 약간 수의 한글 표기법 존재하는데 이중 Hangul Compatibility Jamo을 사용하였습니다.
http://www.unicode.org/charts/PDF/U3130.pdf

입력된 글자 (Character) 를 낱자 (Letter) 의 배열로 변환하는 작업을 합니다.
유니코드에 등재된 한글 자모의 규칙을 분석하여 알고리즘 구현하였습니다.

- - -


####전사법
일대일 대응의 기본적인 원칙 (i), 모든 경우 표현 (ii), 최소화 된 방식(iii)을 모두 만족하며, 후쿠이 레이 전사법 (1989’) 을 참고한 전사법 고안 (박승현 전사법)

`안녕, 세상아 -> Annieng, seisangA! `
> 
기계가 자연어를 처리하는 가장 보편적인 단위인 로마자로 대응하고 이는 국제적으로 통용되기 때문에 학습 및 소통에 용이한 장점이 있습니다.
또한 로마자 기반의 일반적으로 유명한 라이브러리를 적용하기 용이합니다.
- - -

####API
Gimchi.rominize()

##Distance
####측정방식
- Levenshtein Distance
- Hamming Distance
`e.g) HammingDist(안녕,정녕) -> 1`
`HammingDist(Annieng,jengnieng) -> 3`
> 
로마자 전사를 통한 세분화된 distance측정으로 단어 사이의 연관성을 정밀하게 측정 할 수 있다.
- - -
####API
Gimchi.getDistance()


##Correction
Bayes' Theorem에 기초하여 입력된 단어로부터 변경가능한 모든 경우에 대하여 기존의 known data에 존재하면 candidates 로 설정하고 이때에 가장 확률이 높은 candidate(argmaxc)를 추출합니다.
####Bayes' Theorem
argmaxc ∈ candidates P(c|w)
argmaxc ∈ candidates P(c) P(w|c) / P(w)
argmaxc ∈ candidates P(c) P(w|c)
http://norvig.com/spell-correct.html
- - -
####API
Gimchi.getDistance()

