// 정수 내림차순으로 배치하기
function solutionA(n) {
  const nToS = String(n)

  const sort = (a,b) => {
    return b-a
  }

  // join :  배열의 모든 요소를 연결해 하나의 문자열로 
  return parseInt(nToS.split('').sort(sort).join(''))
}

// console.log(solutionA(118372))

// 118372	873211

// 자연수 뒤집어 배열로 만들기
function solutionB(n) {
  const string = String(n).split('')
  
  return string.map((e) => Number(e)).reverse()
}

console.log(solutionB(12345))

// 12345	[5,4,3,2,1]