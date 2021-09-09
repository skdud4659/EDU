function solution(participant, completion) {
  var answer = '';

  participant.sort()
  completion.sort()

  for(let i=0; i<participant.length; i++){
    if(completion[i] !== participant[i]) {
      answer = participant[i]
      break
    }
  }
  return answer;
}

let ppl = ["leo", "kiki", "eden"];
let goal = ["eden", "kiki"];
// let ppl = ["marina", "josipa", "nikola", "vinko", "filipa"];
// let goal = ["josipa", "filipa", "marina", "nikola"];
// let ppl = ["mislav", "stanko", "mislav", "ana"];
// let goal = ["stanko", "ana", "mislav"];

console.log(solution(ppl,goal))