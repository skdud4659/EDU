import React, {useRef, useEffect} from 'react';
import './App.scss';
import { gsap } from 'gsap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {

  // gsap를 사용할 요소를 참조하기 위해 useRef를 사용
  const boxRef = useRef(null)

  // from() <-> to()
  // fromTo() :  : 불투명도 0에서 쓸 때 요소는 보이지 않는 것에서 보이는 것으로 애니메이션
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0 },
      { opacity: 1, y: -70, duration: 3 }
    )

    // gsap.to(
    //   boxRef.current,
    //   {x: 100},
    // )

    gsap.from(
      boxRef.current,
      {x: 100},
    )
  },[]);

  return (
    <Router>
      <div className="wrap" ref={boxRef}>
        <p className="text">hello</p>
      </div>
    </Router>
  );
}

export default App;
