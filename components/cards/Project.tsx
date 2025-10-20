"use client";

import { ytCardDetails } from '@/constants/socialLinks'
import React, { useEffect } from 'react'
import ProjectItem from './ProjectItem'
import { cn } from '@/lib/utils'
import { ReactLenis } from "lenis/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Project() {

  useEffect(() => {
    // Register ScrollTrigger plugin on the client before using it
    gsap.registerPlugin(ScrollTrigger);

    console.log('[Project] initializing GSAP ScrollTrigger');

    const scrollTriggerSettings = {
      trigger: '.project-container',
      start: 'top 25%',
      toggleActions: 'play reverse play reverse',
      // markers: true, // enable if you want visual markers for debugging
    };

    // animate from a slightly smaller scale to 1 so the animation is visible
    gsap.fromTo(
      '.card-item',
      { scale: 0.95 },
      {
        scale: 1,
        duration: 0.5,
        ease: 'power1.out',
        scrollTrigger: scrollTriggerSettings,
      }
    );

    // In case a smooth scroller (like Lenis) is active, force a refresh so ScrollTrigger computes positions correctly
    ScrollTrigger.refresh();
    console.log('[Project] ScrollTriggers:', ScrollTrigger.getAll());

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <ReactLenis root>
        <div className='project-container mt-[50px] mb-[50px] w-auto flex flex-col gap-5 justify-center items-center'>
          {ytCardDetails.map(({ id, title, desc }, idx) => (
            <ProjectItem
              key={idx}
              vidId={id}
              title={title}
              desc={desc}
              className={cn(idx % 2 === 0 ? "flex-row-reverse" : "flex-row")}
            />
          ))}
        </div>
      </ReactLenis>
    </>

  )
}
