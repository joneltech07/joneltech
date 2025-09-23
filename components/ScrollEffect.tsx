"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ScrollEffect() {
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const box = boxRef.current;
    const box2 = boxRef2.current;

    gsap.to(box, {
      x: 500,
      rotation: 360,
      duration: 3,
      scrollTrigger: {
        trigger: box,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(box2, {
        x: 1000,
        rotation: 360,
        duration: 5,
        scrollTrigger: {
            trigger: box2,
            start: "top center",
            end: "bottom top",
            scrub: 1
        },
    });

    return () => {
      // Clean up the animation on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div style={{ height: "200vh", position: "relative" }}>
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>Scroll down to see the effect!</h1>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightblue",
          position: "absolute",
          top: "100vh",
          left: "20px",
        }}
      ></div>

      <div
        ref={boxRef2}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightblue",
          position: "absolute",
          top: "100vh",
          left: "20px",
        }}
      ></div>
    </div>
  );
}