// list : n개의 element형으로 구성된 순서 있는 모임

// Array : 순차 리스트
// http://tcpschool.com/javascript/js_standard_arrayMethod
// 데이터를 삽입하거나 삭제하고 나면, 연속적인 물리적 위치를 유지하기 위해 원소를 옮기는 추가 작업을 해야 한다. >> 삽입이나 삭제가 많다면 시간이 오래걸림
// 장점 : 배열로 구현하기 때문에 인덱스를 통해 연결 리스트보다 빠르게 원소를 탐색할 수 있다.

// indexOf, push, pop, length, shift, unshift, concat, join, reverse, sort, slice, splice, toString()

const list = [1,2,3,4,5]

// indexOf(x) : x의 idx 값
// console.log(list.indexOf(2)) //1

// // push(x) : x 삽입 >> last in
// list.push(6) // [ 1, 2, 3, 4, 5, 6 ]

// // pop(x) : x 삭제 >> last in first out
// list.pop(6) // [ 1, 2, 3, 4, 5 ]

// // length(list) : list의 길이
// console.log(list.length) // 5

// // shift() : 배열 첫번째 요소를 제거
// list.shift() // [ 2, 3, 4, 5 ]

// // unshift() : 배열 첫번째에 요소 추가
// // list.unshift(1) // [ 1, 2, 3, 4, 5 ]

// // --- 기존 배열 변경 x
// // concat(x or []) : 두개의 배열을 합쳐서 새 배열로 반환
// console.log(list.concat(6)) // [ 2, 3, 4, 5, 6 ]
// console.log(list.concat([6,7,8,9])) // [ 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(list) // [ 2, 3, 4, 5 ]

// // --- 기존 배열 변경 x
// // join() : 배열 요소 사이에 문자를 삽입하여 문자열로 반환
// console.log(list.join('/')) // 2/3/4/5
// console.log(list) // [ 2, 3, 4, 5 ]

// // reverse() : 순서 뒤집은 배열
// console.log(list.reverse()) // [ 5, 4, 3, 2 ]
// console.log(list) // [ 5, 4, 3, 2 ]

// // sort() : 정렬
// // https://velog.io/@skdud4659/sort-feat.BOJ-11651
// const arr = [5, 3, 1, 4, 2]
// console.log(arr.sort()) // [ 1, 2, 3, 4, 5 ]
// console.log(arr) // [ 1, 2, 3, 4, 5 ]

// // --- 기존 배열 변경 x
// // slice(start, end) : 배열의 일부를 새 배열로 반환, start idx(포함) ~ end idx(불포함) 까지
// console.log(arr.slice(1, 3)) // [ 2, 3 ]
// console.log(arr) // [ 1, 2, 3, 4, 5 ]

// // splice() : 배열의 요소 추가 및 삭제
// // https://velog.io/@skdud4659/splice
// // 추가
// const splice = ['가', '다', '라', '마']
// splice.splice(1, 0, '나')
// console.log(splice) // [ '가', '나', '다', '라', '마' ]
// // 삭제
// splice.splice(1, 1)
// console.log(splice) // [ '가', '다', '라', '마' ]

// fill: 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움
// arr.fill(value[, start[, end]])
// 리스트를 0으로 채운다.
console.log(list.fill(0)) // [ 0, 0, 0, 0, 0 ]
// 리스트를 1로 index 2부터 채운다(3번째 매개변수가 없기 때문에 지정된 end 없이 끝까지 반영됨)
console.log(list.fill(1, 2)) // [ 0, 0, 1, 1, 1 ]
// 리스트를 2로 index 1-3(end는 포함x)까지 채운다.
console.log(list.fill(2, 1, 3)) // [ 0, 2, 2, 1, 1 ]


// 배열 순회

// // forEach() : 배열 요소를 반복하며 특정 작업을 수행할 수 있다.
// list.forEach((i, idx) => console.log(`${i}...${idx}`));
// // 1...0
// // 2...1
// // 3...2
// // 4...3
// // 5...4

// // for in : 객체의 key와 value 값을 추출 >> key의 갯수만큼 반복
// for (let key in list) {
//   console.log(`${list[key]}...${key}`);
// }
// // 1...0
// // 2...1
// // 3...2
// // 4...3
// // 5...4

// // for of : ES6에서 추가
// for (let item of list) {
//   console.log(`${item}`);
// }
// // 1
// // 2
// // 3
// // 4
// // 5

// // map : 리스트의 요소를 순회하며 현재 index의 요소의 데이터를 가공하여 새로운 리스트로 반환
// const newArray = list.map(item => item + 1)
// console.log(newArray) // [ 2, 3, 4, 5, 6 ]

// filter : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 true인 요소들만을 새로운 배열에 담아 반환
const arr = [3, 100, 25, -10, 140]
const Filter = arr.filter((a) => a < 30)
console.log(Filter) // [ 3, 25, -10 ]

// every : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 모두 true일 때에만 true를 반환
const EveryFalse = arr.every((a) => a < 30)
console.log(EveryFalse) // false
const EveryTrue = arr.every((a) => a < 150)
console.log(EveryTrue) // true

// some : 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결괏값이 하나라도 true이면 true를 반환
const Some = arr.some((a) => a < 30)
console.log(Some) // true

// reduce : 해당 배열의 모든 요소를 하나의 값으로 줄이기 위해, 두 개의 인수를 전달받는 콜백 함수를 실행
// 첫 번째 요소와 두 번째 요소를 인수로 전달하고 실행하며 반환값과 세 번째 요소를 다시 인수로 전달하여 실행
const reduceArr = [1,2,3,4,5]
const Reduce = reduceArr.reduce((x, y) => x+y)
// 1(idx 0)+2(idx 1)=3(return 1) / 3(return 1)+3(idx 2)=6(return 2)
// 6(return 2)+4(idx 3)=10(return 3) / 10(return 3)+5(idx 4)=15(result)
console.log(Reduce) // 15

// reduceRight() :  reduce() 메소드와 같은 방식으로 실행되며, 배열의 마지막 요소부터 줄이기 시작
const ReduceRight = reduceArr.reduceRight((x, y) => x-y)
// 5(idx 4)-4(idx 3)=1(return 1) / 1(return 1)-3(idx 2)=-2(return 2)
// -2(return 2)-2(idx 1)=-4(return 3) / -4(return 3)-1(idx 0)=-5(result)
console.log(ReduceRight) // -5

// entries : 배열 요소별로 키(key)와 값(value)의 한 쌍으로 이루어진 새로운 배열 반복자 객체(Array Iterator Object)를 배열 형태로 반환
const arr1 = [1, true, "JavaScript"];
const arrEntries = arr1.entries();
for (let entry of arrEntries) {
  console.log(entry); // 배열의 인덱스별로 키(key)와 값(value)의 한 쌍을 출력함.
}
// 0,1
// 1,true
// 2,JavaScript

// find : 함수를 만족하는 배열 요소의 값을 반환함. 만족하는 값이 없으면 undefined를 반환
const arr2 = [{
  name : 'kim',
  age : 20
}, {
  name : 'lee',
  age : 25
}]
const Find = arr2.find((l) => l.name === 'kim')
console.log(Find) // { name: 'kim', age: 20 }

// findIndex : 함수를 만족하는 배열 요소의 인덱스를 반환함. 만족하는 값이 없으면 -1을 반환
const FindIndex = arr2.findIndex((l) => l.name === 'lee')
console.log(FindIndex) // 1