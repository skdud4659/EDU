const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :`3 16`).trim().split(' ');

// let fs = require('fs');
// let stdin = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let start = Number(stdin[0])
let end = Number(stdin[1])

let nums = new Array(end+1).fill(true);
//0과 1은 소수가 될 수 없다.
nums[0]=false;
nums[1]=false;

for (let i=2; i*i<=end; i++) {
    if(nums[i]) {
        for (let j=i*i;j<=end;j+=i) {
            nums[j]=false;
        }
    }
}

for (let i=start;i<=end;i++) {
    nums[i] === true ? console.log(i) : null;
}