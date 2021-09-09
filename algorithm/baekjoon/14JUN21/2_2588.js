// const a = Number(a)
// const b = String(b)

// console.log(a*b[2])
// console.log(a*b[1])
// console.log(a*b[0])
// console.log(a*b)

//node.js가 입력값을 읽는 모듈 > 여러줄 ('\n')
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const Num1 = input[0];
const Num2 = input[1];

const oneNum = Num2 % 10;
const tenNum = Math.floor((Num2 % 100) / 10);
const hundredNum = Math.floor(Num2 / 100);

console.log(Num1*oneNum);
console.log(Num1*tenNum);
console.log(Num1*hundredNum);
console.log(Num1*Num2);