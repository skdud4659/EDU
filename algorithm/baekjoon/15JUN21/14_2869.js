// const fs = require('fs');
// const stdin = (
//   process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     :`100 99 1000000000`).trim().split(' ');

const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let date = 1;
let sun = stdin[0];
let current = stdin[0]-stdin[1];

date+=Math.ceil((stdin[2]-sun)/current);

console.log(date)
