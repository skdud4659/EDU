// Spread Operator

// case1. spread operator의 사용
function case1(x, y, z) {
  return x+y+z
};

console.log(case1(1,2,3))

let arr1 = [10, 20, 30];
// 오류
// console.log(case1(arr1)) // 10,20,30undefinedundefined >> 배열의 요소를 함수의 인수로 사용이 불가

// 해결
// console.log(case1.apply(null, arr1)) // 60

// spread operator을 이용해 쉽게 가능
console.log(case1(...arr1)); // 60


// case2. 함수를 호출할 때 사용하기 때문에 함수 중간에 적용
function case2(a, b, c, d, e) {
  return a+b+c+d+e
};

let arr2 = [20,30]
console.log(
  // spread operator을 사용하여 함수 중간(b,c)에 적용
  case2(10, ...arr2, 40, 50)
)

// case3. 새로 배열을 생성할 때 이미 존재하는 배열을 ele로 사용하고 싶을 때 사용
let face = ['eyes', 'nose', 'mouth'];
let head = ['hair', ...face, 'ears'];

console.log(head) // [ 'hair', 'eyes', 'nose', 'mouth', 'ears' ]

// case4. 배열을 복사할 때 사용
let array = [1,2,3]
// let arrCopy = [...array] // [ 1, 2, 3 ]

// 🔥주의
// 아래처럼 할당할 경우 오리지널 배열이 복사된 배열에 의해 영향을 받을 수 있음
let arrCopy = array // [ 1, 2, 3 ]
arrCopy.push(4)
console.log(array) // [ 1, 2, 3, 4] 로 오리지널 배열이 변경됨
console.log(arrCopy) // [ 1, 2, 3, 4 ]

// case5. 객체에서의 사용
let drinks = {
  caffe: 'latte',
  coca: 'cola'
}

let newDrinks = {
  lemon: 'tea',
  orange: 'juice',
  ...drinks
}

console.log(newDrinks)
//   spread operator을 사용하지 않았을 때
// {
//   lemon: 'tea',
//   orange: 'juice',
//   drinks: { caffe: 'latte', coca: 'cola' }
// }

//   spread operator을 사용했을 때
// { lemon: 'tea', orange: 'juice', caffe: 'latte', coca: 'cola' }