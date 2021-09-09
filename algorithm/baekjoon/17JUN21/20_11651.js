const stdin = ['5', '0 4', '1 2', '1 -1', '2 2', '3 3'];

let fs = require('fs');
let stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = stdin.shift();
const arr = [];

for (let i = 0; i<n; i++) {
    arr.push(stdin[i].split(' ').map(strN => parseInt(strN)));
}

let result = '';
//sort 정리는 벨로그에 자세히!
arr.sort((a,b) => {
    if(a[1]!=b[1]) {
        return a[1]-b[1]
    }
    return a[0]-b[0]
})
.forEach(element => (result += `${element[0]} ${element[1]}\n`));

console.log(result)
