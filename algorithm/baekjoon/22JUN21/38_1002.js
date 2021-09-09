const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :`5 21
    5 6 7 8 9`).trim().split('\n')

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

let cards = input.shift().split(' ').map(num => parseInt(num));
let cardN = cards.shift();
let range = cards.shift();

let nums = input.shift().trim().split(' ').map(num => parseInt(num));

let max = 0;

for(let i=0; i<cardN-2; i++){
    for(let j=i+1; j<cardN-1; j++){
        for(let k=j+1; k<cardN; k++){
            let sum = nums[i] + nums[j] + nums[k]
            if(sum <=range && sum>max){
                max = sum;
            }
        }
    }
}

console.log(max)
