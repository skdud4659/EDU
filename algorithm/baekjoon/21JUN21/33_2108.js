const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :`5
    -1
    -2
    -3
    -1
    -2`).split('\n').map(num => parseInt(num));

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

let N = input.shift(0);
let arr = input.sort((a,b) => a-b);
let map = {};

for (let num of arr) {
    if(map[num]) {
        map[num] = map[num]+1;
    } else {
        map[num] = 1;
    }
}

let maxN = Math.max.apply(null,Object.values(map));
let maxarr = [];
let maxresult = 0;
for (let numK in map) {
    if(map[numK]===maxN){
        maxarr.push(numK);
    }
}

if (maxarr.length>1) {
    maxarr = maxarr.sort((a,b) => a-b);
    maxresult = maxarr[1];
} else {
    maxresult = maxarr[0];
}

let sum = arr.reduce((acc, num) => acc + num, 0);
let ave = Math.round(sum / N);

let mid = arr[Math.floor(arr.length/2)];
let range = arr[arr.length-1] - arr[0]

console.log(ave)
console.log(mid)
console.log(maxresult)
console.log(range)