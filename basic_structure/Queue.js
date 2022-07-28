// queue : FIFO(First-In First-Out), 선입후출 >> 줄을 서서 기다리는 것 처럼 먼저 추가되면 가장 먼저 출력된다.

// enqueue, dequeue, toString, empty

class Queue {
  constructor() {
    this.arr = []
  }

  enqueue(item) {
    return this.arr.push(item)
  }

  dequeue() {
    return this.arr.shift()
  }

  toString() {
    let str = ''
    for (let i = 0; i < this.arr.length; i++) {
      str = str + this.arr[i] + '' 
    }
    return str
  }

  empty() {
    return this.arr.length === 0
  }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

console.log(queue) // Queue { arr: [ 1, 2, 3, 4 ] }

queue.dequeue(4) 
console.log(queue) // Queue { arr: [ 2, 3, 4 ] }

console.log(queue.toString()) // 234

console.log(queue.empty()) // false