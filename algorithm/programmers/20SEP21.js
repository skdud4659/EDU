// 정수 제곱근 판별

function solution(n) {
  let sqrt = Math.sqrt(n)
  return Number.isInteger(sqrt) ? Math.pow(sqrt+1,2) : -1
}

console.log(solution(3))

// n	return
// 121	144
// 3	-1