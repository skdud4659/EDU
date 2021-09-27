// list : n개의 element형으로 구성된 순서 있는 모임

// Array : 순차 리스트
// 데이터를 삽입하거나 삭제하고 나면, 연속적인 물리적 위치를 유지하기 위해 원소를 옮기는 추가 작업을 해야 한다. >> 삽입이나 삭제가 많다면 시간이 오래걸림
// 장점 : 배열로 구현하기 때문에 인덱스를 통해 연결 리스트보다 빠르게 원소를 탐색할 수 있다.

// indexOf, push, pop, length, shift, concat, join, reverse, sort, slice, splice

const list = [1,2,3,4,5]

// indexOf(x) : x의 idx 값
console.log(list.indexOf(2)) //1

// push(x) : x 삽입 >> last in
list.push(6)
console.log(list) // [ 1, 2, 3, 4, 5, 6 ]

// pop(x) : x 삭제 >> last in first out
list.pop(6)
console.log(list) // [ 1, 2, 3, 4, 5 ]

// length(list) : list의 길이
console.log(list.length) // 5

// shift() : 배열 첫번째 요소를 제거
list.shift()
console.log(list) // [ 2, 3, 4, 5 ]

// --- 기존 배열 변경 x
// concat(x or []) : 두개의 배열을 합쳐서 새 배열로 반환
console.log(list.concat(6)) // [ 2, 3, 4, 5, 6 ]
console.log(list.concat([6,7,8,9])) // [ 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(list) // [ 2, 3, 4, 5 ]

// --- 기존 배열 변경 x
// join() : 배열 요소 사이에 문자를 삽입하여 문자열로 반환
console.log(list.join('/')) // 2/3/4/5
console.log(list) // [ 2, 3, 4, 5 ]

// reverse() : 순서 뒤집은 배열
console.log(list.reverse()) // [ 5, 4, 3, 2 ]
console.log(list) // [ 5, 4, 3, 2 ]

// sort() : 정렬
// https://velog.io/@skdud4659/sort-feat.BOJ-11651
const arr = [5, 3, 1, 4, 2]
console.log(arr.sort()) // [ 1, 2, 3, 4, 5 ]
console.log(arr) // [ 1, 2, 3, 4, 5 ]

// --- 기존 배열 변경 x
// slice(start, end) : 배열의 일부를 새 배열로 반환, start idx(포함) ~ end idx(불포함) 까지
console.log(arr.slice(1, 3)) // [ 2, 3 ]
console.log(arr) // [ 1, 2, 3, 4, 5 ]

// splice() : 배열의 요소 추가 및 삭제
// https://velog.io/@skdud4659/splice
// 추가
const splice = ['가', '다', '라', '마']
splice.splice(1, 0, '나')
console.log(splice) // [ '가', '나', '다', '라', '마' ]
// 삭제
splice.splice(1, 1)
console.log(splice) // [ '가', '다', '라', '마' ]


// 배열 순회
console.log(list)

// forEach() : 배열 요소를 반복하며 특정 작업을 수행할 수 있다.
list.forEach((i, idx) => console.log(`${i}...${idx}`));
// 1...0
// 2...1
// 3...2
// 4...3
// 5...4

// for in : 객체의 key와 value 값을 추출 >> key의 갯수만큼 반복
for (let key in list) {
  console.log(`${list[key]}...${key}`);
}
// 1...0
// 2...1
// 3...2
// 4...3
// 5...4

// for of : ES6에서 추가
for (let item of list) {
  console.log(`${item}`);
}
// 1
// 2
// 3
// 4
// 5

// map : 리스트의 요소를 순회하며 현재 index의 요소의 데이터를 가공하여 새로운 리스트로 반환
const newArray = list.map(item => item + 1)
console.log(newArray) // [ 2, 3, 4, 5, 6 ]
