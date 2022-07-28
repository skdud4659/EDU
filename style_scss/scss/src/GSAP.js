import React, {useRef, useEffect} from 'react';
import './App.scss';
import { gsap } from 'gsap';

const GSAP = () => {

  const box = useRef(null)

  const trigger = {
    trigger: box.current,
    start: 'top bottom-=75'
  }

  useEffect(() => {
    gsap.to(
      box.current,
      {scrollTrigger:trigger}
    )
  },[])

  return (
    <>
        <section className="section1">
          <h1>section1</h1>
        </section>
    </>
  )

}

export default GSAP