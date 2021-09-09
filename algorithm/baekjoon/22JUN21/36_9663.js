const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :`8`).trim().split(' ')

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ")

let num = Number(input);
//정답
let solution =0;

let board = [];

//범위가 겹치는지 체크
function conflicts(x) {
    for (let i=0; i<x; i++){
        //이전말과 같은 행 같은 열인지 체크
        if(board[i]===board[x]){
            return true;
        }
        //대각선 체크
        if(Math.abs(board[x]-board[i])===x-i){
            return true;
        }
    }
    return false;
}

//재귀형태로 백트래킹
function queen(row) {
    if(row === num){
        solution++;
        return
    }
    for(let col=0; col<num; col++){
        board[row]=col;
        //충돌안한다면
        if(!conflicts(row)){
            queen(row+1);
        }
    }
}

queen(0);
console.log(solution)