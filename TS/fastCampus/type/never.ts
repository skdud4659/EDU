// never
// 어떤 형태도 반환하지 않는다.

function err(msg:string): never {
  throw new Error(msg);
}

function fail() {
  return err('failed');
}

function infiniteLoop(): never {
  while(true) {}
}

let A:string = 'hello';
if (typeof A !== 'string') {
  // A는 문자인데 조건이 문자가 아닌 경우(이런 경우 없음..)에는 never
  A;
}

declare const B: string | number;
if (typeof B !== 'string') {
  // string | number 중 string제외한 number일 경우에만 해당
  B;
}

type Indexable<T> = T extends string ? T & {[index: string]: any} : never;

type ObjectIndexable = Indexable<{}>