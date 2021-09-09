//node.js가 입력값을 읽는 모듈 > 여러줄 ('\n')
//'5 50 50 70 80 100'
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let allcases = Number(input[0])

for (let i = 1; i <= allcases; i++) {
    //5 (50 50 70 80 100)
    let cases = input[i].split(' ')
    //5
    let caseCount = Number(cases[0])
    let sum = 0

    for (let j = 1; j <= caseCount; j++) {
        sum += Number(cases[j])
    }

    let ave = sum/caseCount

    let high = 0
    for (let k = 1; k <= caseCount; k++) {
        if (ave < cases[k]) {
            high += 1
        }
    }

    //toFixed(n) > 소수점 아래 n번째까지 반올림
    result = (high/caseCount*100).toFixed(3)
    console.log(result +'%')
}




