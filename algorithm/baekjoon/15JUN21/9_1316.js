//TODO
//let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `3
      happy
      new
      year`
).trim().split('\n');

const words = stdin[0]

for (let i =0; i<=words; i++) {
    const word = stdin[i]
    const cases = word[0]

    console.log(word)
}

