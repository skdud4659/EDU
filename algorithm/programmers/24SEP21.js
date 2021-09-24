// 자릿수 더하기
function solution(n)
{
    let answer = 0;

    for (let i = 0; i < String(n).length; i++) {
      const e = Number(String(n)[i]);
      answer += e
    }

    return answer;
}

console.log(solution(123))

// 123	6
// 987	24

// 이상한 문자 만들기
// 오답
// function solution(s) {
//   let answer = '';

//   let idx = s.split('')

//   for (let i = 0; i < idx.length; i++) {
//     let e = idx[i];
//     i%2 === 0 ? answer += e.toUpperCase() : answer += e.toLowerCase();
//   }
//   return answer;
// }

// -- 오답 원인 --
// 제한 사항 : 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 문자열 전체의 짝/홀수 인덱스가 아니라 공백을 기준으로 각 단어를 개별적으로 생각했어야한다.

// 해결
function solutionB(s) {
  let arr = []

  // 각 단어별로 나누기
  let word = s.split(' ')

  // 각 단어들을 split하여 map으로 ele의 idx chk 후 대소문자 구별
  for (let i = 0; i < word.length; i++) {
    let ele = word[i].split('').map((e, idx) => {
      if (idx%2 === 0) {
        return e.toUpperCase()
      } else {
        return e.toLowerCase()
      }
      // 단어별로 합쳐서
    }).join('')
    // 배열에 Push
    arr.push(ele)
  }

  // 배열은 [ 'TrY', 'HeLlO', 'WoRlD' ] 각 단어별로 들어가있기 때문에 공백을 기준으로 join
  return arr.join(' ')
}

console.log(solutionB("try hello world"))

// "try hello world"	"TrY HeLlO WoRlD"