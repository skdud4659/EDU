 const fs = require('fs');
 const stdin = (
   process.platform === 'linux'
     ? fs.readFileSync('/dev/stdin').toString()
     :`24 18`).trim().split(' ');

// let fs = require('fs');
// let stdin = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let a = stdin[0]
let b = stdin[1]

while (a%b!== 0) {
  let extra = a%b;
  if(a%b!==0) {
    a=b
    b=extra
  } else {
    b=extra
    break
  }
}

let min = (stdin[0]*stdin[1])/b
console.log(b)
console.log(min)

//유클리드호제법(최대공약수 구하기) > 벨로그에 정리
// 78696(a) ＝ 19332(b)×4 ＋ 1368(a%b)
// 19332(a) ＝ 1368(b)×14 ＋ 180(a%b)
//  1368 ＝ 180×7 ＋ 108
//   180 ＝ 108×1 + 72
//   108 ＝ 72×1 ＋ 36
//    72 ＝ 36×2 >> 나머지가 0이 되었을 때 나누는 수가 최대공약수

//최소공배수 : (a*b)/최대공약수




