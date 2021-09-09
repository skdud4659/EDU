//let ab=2

let fs = require('fs');
let ab = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let movie = 665

while(ab>0) {
    movie++
    if(String(movie).includes('666')){
        ab--;
    }
}

console.log(movie)