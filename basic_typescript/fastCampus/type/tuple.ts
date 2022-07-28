// tuple
let x: [string, number];

// array와 달리 항상 순서와 타입, 길이가 일치해야한다.
x = ['hello', 20];

// err : 순서
x = [10, 'hello']

// err : 길이
x[2] = 'world';

const person: [string, number] = ['mark', 39];

const [first, second, third] = person;