function solution(n) {
  let answer = '';
  let divide = 0;

  while (n>0) {
    divide = n%3;
    n = Math.floor(n/3)
    if(divide === 0) {
      n -= 1
      divide = 4
    }
    answer = divide + answer;
  }
  return answer;
}

console.log(solution(4))
