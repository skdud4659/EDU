const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :`15
    push 1
    push 2
    front
    back
    size
    empty
    pop
    pop
    pop
    size
    empty
    pop
    push 3
    empty
    front`).split('\n');

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let queue = [];
let result = "";
let count = 0;
let startNode = 0;

function orderQueue(queue, orderAry) {
  switch (orderAry[0]) {
    case "push":
      queue.push(orderAry[1]);
      count++;
      break;
    case "pop":
      if (count !== 0) {
        result += `${queue[startNode]}\n`;
        startNode++;
        count--;
      } else {
        result += `-1\n`;
      }
      break;
    case "size":
      result += `${count}\n`;
      break;
    case "empty":
      result += count !== 0 ? `0\n` : `1\n`;
      break;
    case "front":
      result += count !== 0 ? `${queue[startNode]}\n` : `-1\n`;
      break;
    case "back":
      result += count !== 0 ? `${queue[startNode + count - 1]}\n` : `-1\n`;
      break;
  }
}

for (let i = 1; i <= Number(input[0]); i++) {
  let orderAry = input[i].split(" ");
  orderQueue(queue, orderAry);
}

console.log(result.trim());

// let queue = [];
// let result ='';

// for (let i=1;i<=input[0];i++){
//     let stdin = input[i].trim().split(' ');
//     if (stdin.length === 1) {
//         if (stdin[0]=='front'){
//             queue.length==0 ? result += `-1\n` : result += `${queue[0]}\n`;
//         }
//         if (stdin[0]=='back'){
//             queue.length==0 ? result += `-1\n` : result += `${queue[queue.length-1]}\n`;
//         }
//         if (stdin[0]=='size'){
//             result += `${queue.length}\n`;
//         }
//         if (stdin[0]=='empty'){
//             queue.length==0 ? result += `1\n` : result += `0\n`;
//         }
//         if (stdin[0]=='pop'){
//             queue.length==0 ? result += `-1\n` : result += `${queue.shift()}\n`; 
//         }
//     } else {
//         let x = Number(stdin[1]);
//         queue.push(x)
//     }
    
// }
    
// console.log(result.trim())
