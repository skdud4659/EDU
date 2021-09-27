// ECMAScript 2015에 추가
// new Symbol 사용 불가
// Symbol 함수를 사용하여 만들어낼 수 있다.

console.log(Symbol('foo') === Symbol('foo')) // false

// 고유하고 수정불가능한 값으로 만들어준다.
// 접근을 막거나 필요한 곳에서만 접근이 가능하게 많이 사용했었다.
const sym = Symbol();

const obj = {
  [sym]: 'value',
};

obj[sym]