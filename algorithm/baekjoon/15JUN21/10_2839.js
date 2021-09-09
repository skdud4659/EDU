let input = Number(require('fs').readFileSync('dev/stdin').toString())
let num=input

let result = -1
let three =0

if (num%5===0) {
    result = num/5
}

while (num%5!==0) {
    num-=3
    three++
    if (num%5===0) {
        result = num/5+three
        break
        }
    if (num<5){
        if(input%3===0) result = input/3
        break
    }
}

console.log(result)


