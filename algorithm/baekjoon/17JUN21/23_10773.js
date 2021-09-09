const stdin = ['10','1','3','5','4','0','0','7','0','0','6'];

// const fs = require('fs');
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = Number(stdin[0]);

let arr = [];

for (let i=1;i<=input;i++) {
    let num = Number(stdin[i]);
    num !==0 ? arr.push(num) : arr.pop();
}

let result = 0;
for (let i=0; i<arr.length;i++) {
    result+=arr[i]
}

console.log(result)
