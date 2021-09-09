//TODO
const stdin = ['3','2 2','1 5','13 29'];

// const fs = require('fs');
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

//서로 다른 n개에서 r개를 뽑는 것을 nCr공식이라고 한다.
//m개의 포인트에서 n의 포인트에 맞게 연결하여 다리를 지어야한다는 뜻,, = mCn
//다리가 교차되는 것은 조합의 순서가 바뀌어도 결국 경우의 수는 변하지 않기 때문에 노상관
//>> 결국 이항계수 구하라는 말..ㅎ

//파스칼의 삼각형 사용
let arr = Array.from(Array(31), () => new Array(31))

for(let i=0; i<=30; i++){
    for(let j=0; j<=i; j++){
        if(j==0 || i==0 || j==i) arr[i][j]=1;
        else arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
    }
}

for(let i=1; i<=Number(stdin[0]); i++){
    let [a,b] = stdin[i].split(' ').map((num) => Number(num))
    console.log(arr[b][a])
}

// 왜 틀렸는지 모르겠다............. >> 정답 오버플로우 ㅎㅎㅎ
// const stan = stdin[0];

// function factorial(n) {
//     if(n<=1){
//         return 1
//     } else {
//         return n*factorial(n-1)
//     }
// }

// for(let i=1;i<=stan;i++) {
//     let input = stdin[i].split(' ').map((num) => Number(num));
//     let a = input[1]
//     let b = input[0]

//     let result = Math.ceil(factorial(a)/(factorial(b)*factorial(a-b)))
//     console.log(result)
// }