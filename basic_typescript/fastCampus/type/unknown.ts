declare const maybe: unknown;

// any일 경우에는 에러가 발생하지 않기 때문에 실수할 수 있음
const aNumber: number = maybe;

// 조건문 안의 maybe는 불린이기 때문에 내부적으로 불린으로 지정된다.
if (maybe === true) {
  const aBoolean: boolean  = maybe;

  // 그래서 스트링으로 지정하면 에러가 남
  // const aString: string = maybe;
}

if (typeof maybe === 'string') {
  // 이 조건문 안에서는 스트링이 됨
  const aString: string = maybe;

  // const aBoolean: boolean  = maybe;

}