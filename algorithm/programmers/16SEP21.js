// 최대공약수와 최소공배수
function solution(n, m) {
  let answer = [];

  // 최소공배수를 구하기 위한 값 >> 최소공배수 구하기 : 두 수의 곱 / 최대공약수
  const times = n*m 

  // 최대공약수 >> 유클리드호제법
  while (m !== 0) {
    let extra = Math.abs(n%m)
    n = m
    m = extra
  }

  // 최소공배수
  const min = times/n

  // answer에 대입
  answer.push(n,min)
  return answer;
}

console.log(solution(3,12))

// 입출력 예
// 3	12	[3, 12]
// 2	5	[1, 10]