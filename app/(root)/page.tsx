"use client";

import AnimatedCopy from "@/components/AnimatedCopy";
import Project from "@/components/cards/Project";
import TechLogo from "@/components/cards/TechLogo";
import { useScroll } from "framer-motion";
import ReactLenis from "lenis/react";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Home from "../Home/page";
import { initializeRefsStore } from "@/store/useMenuStore";
import AboutMe from "../AboutMe/page";
import AnimatedText from "@/components/AnimatedText";

export default function Index() {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  // Map section names to their corresponding Refs
  const sectionRefs = {
    home: container,
    about: aboutRef,
    stack: stackRef,
    projects: projectRef,
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    initializeRefsStore(sectionRefs);
  }, []);

  return (
    <ReactLenis root>
      <main ref={container} className="relative h-[200vh]">
        <Home ref={homeRef} scrollYProgress={scrollYProgress} />

        <AboutMe ref={aboutRef} scrollYProgress={scrollYProgress} />

        <section
          ref={stackRef}
          className="h-screen flex items-center justify-center"
        >
          <div className="text-center space-y-3 px-6 sm:px-14">
            <AnimatedText
              once
              text="My Tech Stack"
              className="font-bold text-3xl text-[#0a2c42]"
            />

            <AnimatedCopy>
              <p className="text-3xl text-gray-300">
                Technologies I&apos;ve been working with recently
              </p>
            </AnimatedCopy>

            <TechLogo />
          </div>
        </section>

        <section ref={projectRef} className="py-[50px]">
          <div className="text-center space-y-3">
            <AnimatedText
              once
              text="Projects"
              className="font-bold text-3xl text-[#0a2c42]"
            />

            <AnimatedCopy>
              <p className="text-3xl text-gray-300">
                Things I&apos;ve buid so far
              </p>
            </AnimatedCopy>

            <Project />
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
