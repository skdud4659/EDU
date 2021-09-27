// stack : LIFO(Last In First Out), 후입선출 >> 요소가 추가되면 아래로 쌓여 출력 시 가장 위(마지막에 추가한 요소)부터 출력된다.
// https://velog.io/@skdud4659/%EC%8A%A4%ED%83%9D-feat.BOJ-10773

// push, pop, peak, lefts, clear, size, empty

class Stack {
  constructor() {
    this.arr = []
  };

  // 요소 추가
  push(item) {
    return this.arr.push(item)
  }

  // 요소 삭제
  pop() {
    return this.arr.pop()
  }

  // 맨 위의 요소 확인
  peak() {
    return this.arr[this.arr.length-1]
  }

  // 모든 요소 문자열로 반환
  lefts() {
    let str = '';
    for (let i = 0; i < this.arr.length; i++) {
      str = str + this.arr[i] + ''
    }
    return str
  }

  // 모든 요소 삭제
  clear() {
    return this.arr = []
  }

  size() {
    return this.arr.length
  }

  // 남은 요소가 있는지 확인 > boolean
  empty() {
    return this.arr.length === 0 ? true : false
  }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack) // Stack { arr: [ 1, 2, 3 ] }

stack.pop(3)
console.log(stack) // Stack { arr: [ 1, 2 ] }

console.log(stack.peak()) // 2

console.log(stack.lefts()) // 12

console.log(stack.size()) // 2

console.log(stack.empty()) // false

console.log(stack.clear()) // []