import React, {useEffect, useMemo, useRef} from 'react';
import './App.css';
import { throttle } from 'lodash'

function App() {
  const el = useRef<HTMLDivElement>(null)
  const section1 = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const section2 = useRef<HTMLDivElement>(null)

  const scrollEvent = useMemo(
    () => throttle(() => {
      if ( section1.current === null || inner.current === null ) {
        return
      }
      // innerHeight : 현재 보이는 화면의 높이
      // scrollY : 스크롤이 움직이는 제일 상단의 높이
      const { innerHeight, scrollY } = window

      // offsetHeight : 대상이 되는 영역의 높이
      const { offsetHeight } = section1.current
      const { offsetHeight: innerOffSet } = inner.current

      //  getBoundingClientRect : 대상이 되는 영역에 대한 정보 {x, y, width, height, top, left, right, bottom}
      const rectS1 = section1.current.getBoundingClientRect()
      const rectInner = inner.current.getBoundingClientRect()
      console.log({ innerHeight, scrollY, offsetHeight, innerOffSet, rectS1, rectInner })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 10),
    []
  )
  useEffect(() => {
    window.addEventListener('scroll', scrollEvent)
    window.dispatchEvent(new Event('scroll'))
    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [scrollEvent])
  return (
    <div ref={el} className="App">
      <div className="scroll-section" id="scroll-section-0">
        <div className="description">
          <span>첫번째</span>
        </div>
      </div>

      <div ref={section1} className="scroll-section" id="scroll-section-1">
        <div className="description">
          <span>두번째</span>
        </div>

        <div ref={inner} className="scroll-section" id="scroll-section-1-inner">
          <div className="description">
            <span>세번째</span>
          </div>
        </div>
      </div>


      <div ref={section2} className="scroll-section" id="scroll-section-2">
        <div className="description">
          <span>네번째</span>
        </div>
      </div>
    </div>
  );
}

export default App;
