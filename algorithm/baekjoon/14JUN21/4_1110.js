//let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let num = 26 //input
let sum;
let count = 0;

while(true) {
    sum = Math.floor(num/10) + num%10
    num = (num%10)*10 + sum%10

    count++;

    if (26 === num) {
        break
    }
}

console.log(count)  //4