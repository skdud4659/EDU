const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    :
      `4 5 1
1 2
1 3
1 4
2 4
3 4`
).split('\n');

let [N,M,V] = stdin[0].split(" ").map(Number) //노드개수, 간선개수,시작노드번호
let graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0)); //인접 행렬 배열 생성
let visit = Array(N + 1).fill(0); // visit 배열
let result = "" //출력 결과

function dfs(v){
    result += `${v} `
    visit[v] = 1;
    for(let i=1;i<=N;i++){
        if(visit[i] == 1 || graph[v][i] === 0){//이미 방문했거나, v와 i노드가 인접하지 않다면 지나치기
            continue;
        }
        dfs(i);
    }
}

function bfs(v) {
    let q = [v]; //queue
    visit[v] = 0; //dfs 완료후 배열이 1로 채워져있으니 방문한 경우 1에서 0으로 변경 (출력해보면 [ 0, 1, 1, 1, 1 ])
    let result = "";

    while (q.length !== 0) {
      let v = q.shift();
      result += `${v} `;
      for (let i = 1; i < N + 1; i++) {
        if (visit[i] === 0 || graph[v][i] === 0) { //이미 방문했거나, v와 i노드가 인접하지 않다면 지나치기
            continue;
        }
        q.push(i);
        visit[i] = 0;//i 방문했으니 visit에 담기
      }
    }
    return result;
  }

for(let i=1;i<=M;i++){
    let data = stdin[i].split(" ").map(Number)
    let [x, y] = [data[0],data[1]];
    for(let i=0;i<M;i++){
        graph[x][y] = 1;
        graph[y][x] = 1;  
    }  
}

dfs(V);
console.log(result)
console.log(bfs(V));

return;