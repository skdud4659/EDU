//const stdin = ['6','(())())','(((()())()','(()())((()))','((()()(()))(((())))()','()()()()(()()())()','(()((())()('];
const stdin = ['3','((','))','())(()'];

// const fs = require('fs');
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = Number(stdin[0]);

for (let i=1;i<=input;i++){
    let arr = stdin[i];
    let stack = [];
    let result = 'YES'
    for (let j=0;j<arr.length;j++){
        if(arr[j] === "("){
            stack.push(1)
        } else {
            if(!stack.pop()){
                result = 'NO'
            }
        }
    }
    if(stack.length!==0) {
        result='NO'
    }
    console.log(result)
 }
    

