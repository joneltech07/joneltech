"use client";

import React from "react";
import AnimatedCopy from "./AnimatedCopy";
import Image from "next/image";
import { useTransform, motion } from "framer-motion";

type AboutProps = {
  scrollYProgress?: unknown;
};

const AboutMe = React.forwardRef<HTMLDivElement, AboutProps>(function AboutMe(
  { scrollYProgress },
  ref
) {
  const scale = useTransform(scrollYProgress as any, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress as any, [0, 1], [5, 0]);

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      style={{ scale, rotate }}
      className="h-screen py-[20px]"
    >
      <div className="text-center space-y-3 px-6 sm:px-14">
        <p className="font-bold text-3xl text-[#0a2c42]">About Me</p>

        <div className="relative">
          <div className="rounded-3xl bg-[#0a2c42] p-[120px]">
            <div className="w-full flex">
              <div className="flex flex-3 flex-col">
                <AnimatedCopy
                  colorInitial="#0d97c5"
                  colorAccent="#000000"
                  colorFinal="#ffffff"
                >
                  <p className="text-3xl text-gray-300 text-wrap pb-[30px] text-start">
                    I&apos;m a highly versatile Full-Stack Developer
                    specializing in performance optimization and system
                    modernization. Seeking a challenging Web Developer role to
                    leverage proven expertise across Laravel, React, Next.js,
                    and Vue.js to build scalable solutions.
                  </p>
                </AnimatedCopy>

                <p className="text-3xl text-gray-300 text-wrap font-bold italic text-start">
                  Jonel Uligan
                </p>
              </div>

              <div className="flex-1">
                <Image
                  src="/images/profile-photo.png"
                  alt="Profile Photo"
                  width={400}
                  height={400}
                  className="object-contain absolute bottom-0 right-[50px]"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default AboutMe;
