//TODO
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `3
      0 3
      1 5
      45 50
`
).split('\n');

