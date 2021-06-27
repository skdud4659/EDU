let nums = [];
let self_num = [];

for (let i = 1; i <= 10000; i++) {
    let num = 0;
    let strN = String(i);
    for (let j = 0; j < strN.length; j++) {
        num+=Number(strN[j]);
    }
    let newN = i + num;
    nums.push(newN);
}

//indexOf(i) 메서드는 배열에서 지정된 요소를 찾을 수 있는 i번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
for (let i = 1; i <= 10000; i++) {
    if(nums.indexOf(i)===-1) {
        self_num += i + "\n";
    }
}

console.log(self_num)