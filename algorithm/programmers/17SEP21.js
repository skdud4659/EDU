// 짝수와 홀수
// function solution(num) {
//   return num%2 ? "Odd" : "Even"
// }

// console.log(solution(4))

// 입출력
// 3	"Odd"
// 4	"Even"

// 제일 작은 수 제거하기
function solution(arr) {

  // 최소값
  const min = Math.min.apply(null,arr)
  // 최소값의 idx
  const idx = arr.findIndex((a) => a === min)

  arr.splice(idx,1)

  return arr.length > 1 ? arr : [-1]
}
  
  console.log(solution([10]))

// 입출력
// [4,3,2,1]	[4,3,2]
// [10]	[-1]