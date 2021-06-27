// const h=23
// const m=40

//node.js가 입력값을 읽는 모듈 > 1줄 (' ')
const fs = require('fs');
const ab = fs.readFileSync('/dev/stdin').toString().split(' ');

const h = Number(ab[0]);
const m = Number(ab[1]);

if (m>44) {
    console.log(h,m-45)
} else if (h>0 && m<45) {
    console.log(h-1,m+15)
} else {
    console.log(23,m+15)
}

//console.log > 22 55