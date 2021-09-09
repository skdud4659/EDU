function solution(numbers) {
  let sums = [];

  for(let i=0; i<numbers.length; i++) {
    for(let j=i+1; j<numbers.length; j++) {
      let a= numbers[i]
      let b= numbers[j]
      sums.push(a+b)
    }
  }
  
  function compare(a,b) {
    return a-b;
  }

  sums.sort(compare)
  
  let answer = [...new Set([...sums])];
  
  return answer;
}

let result = solution([2,1,3,4,1])

console.log(result)