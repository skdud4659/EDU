// 문자열 압축

function solution(s) {
  if (s.length === 1) return 1;
  let strings = [];
  let answer = 0;
  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let cnt = 1;
    let string = "";
    for (let j = 0; j < s.length; j += i) {
      const current = s.substr(j, i);
      const next = s.substr(j + i, i);
      if (current === next) {
        cnt++;
      } else {
        string = cnt > 1 ? string + cnt + current : string + current;
        cnt = 1;
      }
    }
    strings.push(string.length);
  }
  return Math.min(...strings);
}
