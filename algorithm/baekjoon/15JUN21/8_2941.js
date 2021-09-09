// let input = 'ljes=njak'
const input = require('fs').readFileSync('dev/stdin').toString().trim()
let word = input
let croatia = [/c=/g, /c-/g,/dz=/g,/d-/g,/lj/g,/nj/g,/s=/g,/z=/g];
// g flag(/regex/g)
// : 표현식을 만족시키는 패턴이 한 개 이상 있는지 검사합니다. match() 함수의 리턴 값이 스트링 그룹, 즉 배열(Array) 형태입니다.

//map : 새로운 배열로 만들어주기 위한 함수
croatia.map(Element => word = word.replace(Element,'.'));
console.log(word.length)