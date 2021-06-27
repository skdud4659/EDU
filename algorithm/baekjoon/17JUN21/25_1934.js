const stdin = ['3','1 45000','6 10','13 17'];

// const fs = require('fs');
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

//최대 공약수 먼저 구하기
let input = Number(stdin[0]);

for(let i=1;i<=input;i++){
    let arr = stdin[i].split(' ');

    let a = arr[0]
    let b = arr[1]

    while(a%b!==0){
        let extra = a%b
        if(a%b!=0){
            a=b
            b=extra
        } else {
            b=extra
            break
        }
    }
    //최소공배수
    let min = (arr[0]*arr[1])/b
    console.log(min)
}
