function returnAny(message: any):any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

// 로그로 표현되는 역할만 하는 것에 대해서는 숫자, 문자가 중요하지 않기 때문에 any일 수 있다.
// > 타입을 추론하는 과정에서 message에 어떤 것이 들어갈지 지정되지 않았기 때문에
// > 그렇기 때문에 개발자가 지정해줘야한다.

let looselyTyped:any = {};

const d = looselyTyped.a.b.c.d;
// 개체를 통해 계속 전파된다.
// 타입 안정성을 해칠 수 있다.

function leakingAny(obj: any) {
  const a:number = obj.num;
  const b = a+1;
  return b
}

const c = leakingAny({num:0});
c.indexOf('0')