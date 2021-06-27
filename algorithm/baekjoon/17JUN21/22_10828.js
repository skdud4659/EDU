const stdin = ['7','pop','top','push 123','top','pop','top','pop'];

// const fs = require('fs');
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

let stack = [];
let input = Number(stdin[0]);
let result ='';

for (i=1;i<input+1;i++) {
    const command = stdin[i].split(' ');
    //push를 제외하고는 length가 1이기 때문
    if (command.length == 1) {
        //pop일 때
        if(command[0]==='pop'){
            stack.length == 0?result += `-1\n`:result += `${stack.pop()}\n`;
        }
        //size일 때
        if(command[0]==='size'){
            result += `${stack.length()}\n`;
        }
        //empty일 때
        if(command[0]==='empty'){
            stack.length == 0?result += `1\n`:result += `0\n`;
        }
        //top일 때 > stack 총 길이에 자릿수 -1을 한 후 콘솔에 찍어줌
        if(command[0]==='top'){
            stack.length == 0?result += `-1\n`:result += `${stack[stack.length-1]}\n`;
        }
    } else {
        //push는 뒤에 넣을 숫자가 있기 때문에 else에 들어감
        let x = Number(command[1]);
        stack.push(x);
    }
}

console.log(result.trim())