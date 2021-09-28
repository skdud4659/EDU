const arr = [1,2,3,4,5]

const times = arr.reduce((acc, item) => {
  let result = acc
  if(result !== 0) {
    result = (acc*item)
  } else {
    result += item
  }
  return result
}, 0)

console.log(times)

const arr_divided = [100, 10, 5]
const divided = arr_divided.reduce((acc, item) => {
  let result = acc
  if (result !== 0) {
    result = Math.floor(acc/item)
  } else {
    result += item
  }
  return result
}, 0)
console.log(divided)

const totalPrice = arr.reduce((x, y) => {
  return x + y;
}, 0);

console.log(totalPrice)

const menu = [
  {
    name: "A",
    value: "a",
    price: 10000,
    disabled: true,
    names: [
      {
        nickName: "Ariel"
      },
      {
        age: 30
      }
    ]
  },
  {
    name: "B",
    value: "b",
    price: 20000,
    disabled: false,
    names: [
      {
        nickName: "Mike"
      },
      {
        age: 50
      }
    ]
  },
  {
    name: "C",
    value: "c",
    price: 30000,
    disabled: true,
    names: [
      {
        nickName: "Lola"
      },
      {
        age: 10
      }
    ]
  }
];

let info = menu.map((m) => {
  const item = m.names
  console.log(`${item[0].nickName}은 ${item[1].age}살!`)
})
