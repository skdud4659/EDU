import React from 'react';

// props interface로 지정
interface HelloProps {
  name: string;
  mark: string;
}

// React.FC를 사용하면 props에 기본적으로 children이 들어가 있다.
// 다만, React.FC를 사용할 경우 defaultProps가 정상 작동하지 않는다.
function Hello({name, mark}: HelloProps) {
  return <div>hello {name} {mark}</div>
}

Hello.defaultProps = {
  mark: '!'
};

export default Hello;