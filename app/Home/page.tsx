"use client";

import React from "react";
import LottieClientWrapper from "@/components/lotties/LottieClientWrapper";
import Image from "next/image";
import {
  useTransform,
  motion,
  MotionValue,
  useMotionValue,
} from "framer-motion";
import FadeInOnScroll from "@/components/FadeInOnScroll";

type HomeProps = {
  scrollYProgress?: MotionValue<number>;
};

const Home = React.forwardRef<HTMLDivElement, HomeProps>(function Home(
  { scrollYProgress },
  ref
) {
  // ✔ fallback MotionValue if parent didn't pass one
  const fallback = useMotionValue(0);
  const progress = scrollYProgress ?? fallback;

  // ✔ No "any" usage
  const scale = useTransform(progress, [0, 1], [1, 0.8]);
  const rotate = useTransform(progress, [0, 1], [0, -5]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, rotate }}
      className="h-screen flex sticky top-0"
    >
      <div className="flex flex-1 flex-wrap justify-center items-center px-6 pb-6 pt-10 sm:px-14">
        <FadeInOnScroll
          delay={0.1}
          yOffset={10}
          className="flex flex-wrap md:flex-nowrap flex-1/2 justify-center items-center"
        >
          <LottieClientWrapper />
          <p className="text-center md:text-start text-gray-500 text-wrap md:text-[28px] font-normal">
            I&apos;m here to support your business through web development,
            offering solutions and a commitment to{" "}
            <span className="font-bold text-5xl block md:inline md:text-7xl text-[#0d97c5]">
              Excellence
            </span>
          </p>
        </FadeInOnScroll>

        <div className="flex-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden hidden md:block">
            <FadeInOnScroll delay={0.3} yOffset={100} duration={1.2}>
              <Image
                src="/images/profile-id.jpg"
                alt="Profile Photo"
                width={400}
                height={400}
                className="object-contain"
                priority={true}
              />
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default Home;
