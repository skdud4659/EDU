// 하샤드 수
// 풀이 1 >> 제일 늦은 속도 0.09
function hashard(x) {

  let add = 0
  for (let i = 0; i < String(x).length; i++) {
    const ele = Number(String(x)[i]);
    add += ele
  }
  const answer = x%add === 0
  return answer;
}

// 풀이 2 >> 제일 늦은 속도 0.22
// function hashard(x) {

//   let add = 0
//   const sep = (x+"").split("")
//   for (let i = 0; i < sep.length; i++) {
//     const ele = Number(sep[i]);
//     add += ele
//   }
//   const answer = x%add === 0
//   return answer;
// }

// console.log(hashard(12))

// 입출력 예
// 10	true
// 12	true
// 11	false
// 13	false

// 콜라츠 추측
function collatz (num) {

  let N = num
  let count = 0
  
  while (N !== 1) {
    let even = N%2 === 0
    if (even) {
      count += 1
      N = Math.floor(N/2)
    } else if (!even) {
      count += 1
      N = N*3+1
    }
  }

  const result = count >= 500 ? count = -1 : count
  return result;
}

console.log(collatz(16))

// 입출력 예
// 6	8
// 16	4
// 626331	-1