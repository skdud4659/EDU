// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

//node.js가 입력값을 읽는 모듈 > 1줄 (' ')
const fs = require('fs');
const ab = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = Number(ab[0]);
const b = Number(ab[1]);

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Math.floor(a/b))
console.log(a%b)

//Math : 수학에서 자주 사용하는 상수와 함수들을 미리 구현해 놓은 자바스크립트 표준 내장 객체
//>> 생성자가 존재하지 않음
// 1. Math.min() >> 가장 작은 수 반환
// 2. Math.max() >> 가장 큰 수 반환
// 3. Math.random() >> 0보다 크거나 같고 1보다 작은 무작위 숫자
// 4. Math.round() >> 소수점 첫 번째 자리에서 반올림
// 5. Math.floor() >> 전달받은 값과 같거나 작은 수 중 가장 큰 정수 리턴(버림)
// 6. Math.ceil() >> 전달받은 값과 같거나 큰 수 중 가장 작은 정수 리턴(올림)
// 7. Math.abs() >> 인수의 절대값
