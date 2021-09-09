// 행렬의 덧셉
function solution(arr1, arr2) {
  var answer = [];
  for(let i=0; i<2; i++) {
    let add = []
    for(let j=0; j<arr1[0].length; j++) {
      let ttl = arr1[i][j] + arr2[i][j]
      add.push(ttl)
    }
    answer.push(add)
  }
  return answer;
}

console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]))
// [[4,6],[7,9]]

// 핸드폰 번호 가리기
// 풀이1 >> 반복된 for문으로 시간복잡도가 좋지 않을듯함..!
// function phoneSolution(phone_number) {
//   var answer = '';
//   for(let i=0; i<phone_number.length-4; i++) {
//     answer += '*'
//   }
//   for(let j=phone_number.length-4; j<phone_number.length; j++) {
//     answer += phone_number[j]
//   }
//   return answer;
// }

// 개선 풀이2
function phone(phone_number) {
  var answer = "*".repeat(phone_number.length-4) + phone_number.slice(-4)
  return answer;
}

console.log(phone("01033334444"))
//"*******4444"