const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :`8
    4
    3
    6
    8
    7
    5
    2
    1`).trim().split('\n').map((num) => Number(num));

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((num) => Number(num));

let stack = [];
let insertNumMax = 0;
let result = "";

for (let i = 1; i <= input[0]; i++) {
  if (input[i] > insertNumMax) {
    for (let j = insertNumMax + 1; j <= input[i]; j++) {
      stack.push(j);
      insertNumMax = j;
      result += `+\n`;
    }
    stack.pop();
    result += `-\n`;
  } else {
    let popNum = stack.pop();
    if (popNum !== input[i]) {
      result = "NO";
      break;
    } else {
      result += `-\n`;
    }
  }
}

console.log(result.trim());