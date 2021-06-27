function solution(arr) {
  let sum = 0;
  
  for (let i=0; i<arr.length; i++) {
      sum += arr[i]
  }

  var answer = sum/arr.length
  
  return answer;
}

let result = solution([1,2,3,4])
console.log(result)