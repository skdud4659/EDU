//  const fs = require('fs');
//  const stdin = (
//    process.platform === 'linux'
//      ? fs.readFileSync('/dev/stdin').toString()
//      :`2
//      4 2
//      `).trim().split('\n');


const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = input[1].trim().split(' ').map(Number);
//프로그래밍 방식으로 생성된 모든 크기의 배열에서 값을 찾기 위해 .apply(null,num)
let max = Math.max.apply(null,num);
let min = Math.min.apply(null,num);
console.log(max*min)

