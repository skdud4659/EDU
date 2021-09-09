//TODO

const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `1
      10
      13
      100
      1000
      10000
      100000
      0
`
).split('\n');