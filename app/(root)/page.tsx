"use client";

import AboutMe from "@/components/AboutMe";
import AnimatedCopy from "@/components/AnimatedCopy";
import Project from "@/components/cards/Project";
import TechLogo from "@/components/cards/TechLogo";
import Home from "@/components/Home";
import { useScroll } from "framer-motion";
import ReactLenis from "lenis/react";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function Index() {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <ReactLenis root>
      <main ref={container} className="relative h-[200vh]">
        <Home scrollYProgress={scrollYProgress} />

        <AboutMe scrollYProgress={scrollYProgress} />

        <section className="py-[200px]">
          <div className="text-center space-y-3 px-6 sm:px-14">
            <p className="font-bold text-3xl text-[#0a2c42]">My Tech Stack</p>

            <AnimatedCopy>
              <p className="text-3xl text-gray-300">
                Technologies I&apos;ve been working with recently
              </p>
            </AnimatedCopy>

            <TechLogo />
          </div>
        </section>

        <section>
          <div className="text-center space-y-3">
            <p className="font-bold text-3xl text-[#0a2c42]">Projects</p>

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
