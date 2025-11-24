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
import Experience from "../Experience/page";
import { certfificates } from "@/constants/certificates";
import Certificate from "@/components/cards/Certificate";

export default function Index() {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const sectionRefs = {
      home: container,
      about: aboutRef,
      stack: stackRef,
      experience: experienceRef,
      projects: projectRef,
    };

    initializeRefsStore(sectionRefs);
  }, []);

  return (
    <ReactLenis root>
      <main ref={container} className="relative h-[200vh]">
        <Home ref={homeRef} scrollYProgress={scrollYProgress} />

        <AboutMe ref={aboutRef} scrollYProgress={scrollYProgress} />

        <section
          ref={stackRef}
          className="h-screen flex items-center justify-center bg-[#194660]"
        >
          <div className="text-center space-y-3 px-6 sm:px-14">
            <AnimatedText
              text="My Tech Stack"
              className="font-bold text-3xl text-white"
            />

            <AnimatedCopy colorFinal="#f2f2f2">
              <p className="text-3xl">
                Technologies I&apos;ve been working with recently
              </p>
            </AnimatedCopy>

            <TechLogo />
          </div>
        </section>

        <Experience ref={experienceRef} />

        <section ref={projectRef}>
          <div className="text-center space-y-3 bg-[#194660] h-60 flex flex-col justify-center">
            <AnimatedText
              text="Projects"
              className="font-bold text-3xl text-white"
            />

            <AnimatedCopy colorFinal="#f2f2f2">
              <p className="text-3xl text-gray-300">
                Things I&apos;ve built so far
              </p>
            </AnimatedCopy>
          </div>
          <Project />
        </section>

        <section className="flex flex-col relative bg-gray-50">
          <AnimatedText
            text="Certification"
            className="font-bold text-3xl text-center text-[#0a2c42] sticky top-1 py-10"
          />

          <div className="relative">
            {certfificates.map((project, i) => {
              const targetScale = 1 - (certfificates.length - i) * 0.05;

              return (
                <Certificate
                  key={`p_${i}`}
                  i={i}
                  {...project}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
