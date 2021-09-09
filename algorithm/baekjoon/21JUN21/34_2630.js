const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :`8
    1 1 0 0 0 0 1 1
    1 1 0 0 0 0 1 1
    0 0 0 0 1 1 0 0
    0 0 0 0 1 1 0 0
    1 0 0 0 1 1 1 1
    0 1 0 0 1 1 1 1
    0 0 1 1 1 1 1 1
    0 0 1 1 1 1 1 1`).trim().split('\n')

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

let n = input[0];
let paper = input.slice(1).map(v => v.trim().split(' '));
let size = [128,64,32,16,8,4,2,1].filter(v => v <=n);
let white = 0;
let blue = 0;

size.forEach(v => {
    for(let i=0; i<=n-v; i+=v) {
        for (let j=0; j<=n-v; j+=v) {
            let color = paper[i][j];
            let mono = true;
            outer : for (let x=i; x<i+v; x++ ){
                for (let y=j; y<j+v; y++){
                    if(paper[x][y]==='2' || paper[x][y] !== color) {
                        mono = false;
                        break outer;
                    }
                }
            }
            if (mono) {
                if (color === "0") white++;
                else if (color === "1") blue++;
                for (let x=i; x<i+v; x++){
                    for (let y=j; y<j+v; y++) {
                        paper[x][y]='2';
                    }
                }
            }
        }
    }
})

console.log(white)
console.log(blue)

