const fs = require("fs");
let stdin = (
process.platform === "linux"
? fs.readFileSync("/dev/stdin").toString()
:`5 2`  
).trim() 
.split(" ").map(Number);

// const fs = require('fs');
// const stdin = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const a = stdin[0]
const b = stdin[1]

//팩토리얼 : 1에서부터 n까지의 모든 수의 곱
//ex) 5! = 5*4*3*2*1 = 120
function factorial(n){
    if(n<=1){
        return 1
    }
    return n*factorial(n-1)
}

//이항계수 공식 = a!/b!(a-b)!
console.log(factorial(a)/(factorial(b) * factorial(a-b)))

