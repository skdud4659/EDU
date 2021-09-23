// case1. 표현식의 결과값을 반환하는 표현식 본문
let arr = [1,2,3,4,5];

// let twice = arr.map(v => v*2);
// let twice = arr.map(function(val) {
//   return val*2;
// })

// console.log(twice) // [ 2, 4, 6, 8, 10 ]

// case2. 상태 블록 본문
let twice = arr.map(v => {
  if (v % 2 === 0) {
    console.log('even')
  } else {
    console.log('odd')
  }
});

// odd
// even
// odd
// even
// odd
