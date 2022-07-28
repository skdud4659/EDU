// void : return을 가지고 아무것도 하지 않겠다.
// void return으로 유일하게 undefined만 적용할 수 있다.

function returnVoid(msg:string): void {
  console.log(msg);

  return;
}

const r = returnVoid('리턴이 없다.') // type : void