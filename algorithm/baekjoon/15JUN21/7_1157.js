//TODO
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();

function Word(word) {
  const alphabet = new Array(26).fill(0);

  let charAry = word.toLowerCase().split("");
  let asciiA = "a".charCodeAt();

  //forEach : 배열의 요소를 반복
  charAry.forEach((char) => {
    let asciiChar = char.charCodeAt();
    let index = asciiChar - asciiA;
    alphabet[index] += 1;
  });

  //배열 [], 혹은 객체 {} 안의 값을 편하게 꺼내 쓸 수 있는 문법
  let maxNum = Math.max(...alphabet);
  let maxIndex = alphabet.indexOf(maxNum);
  let isSame = false;

  for (let i = 0; i < alphabet.length; i++) {
    if (maxNum === alphabet[i] && i !== maxIndex) {
      isSame = true;
    }
  }
  return isSame ? "?" : String.fromCharCode(maxIndex + asciiA).toUpperCase();
}

console.log(Word('hello'));
