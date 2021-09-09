const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :`2
    6 12 10
    30 50 72`).trim().split('\n');

// let fs = require('fs');
// let stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let hotel = Number(stdin[0]);

for(i=1; i<=hotel; i++) {
    let nums = stdin[i].trim().split(' ');
    let height = nums[0];
    let pax = nums[2];

    let floor=pax%height ===0 ? String(height) : String(pax%height);
    let ho = Math.ceil(pax/height);

    ho<10 ? console.log(floor+'0'+String(ho)) : console.log(String(floor)+String(ho))
}

