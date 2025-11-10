"use client";

import React from "react";
import LottieClientWrapper from "@/components/lotties/LottieClientWrapper";
import Image from "next/image";
import { useTransform, motion } from "framer-motion";

export default function Home({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div style={{ scale, rotate }} className="h-screen sticky top-0">
      <div className="flex flex-wrap justify-center px-6 pb-6 pt-10 sm:px-14">
        <div className="flex flex-wrap md:flex-nowrap flex-1/2 justify-center items-center">
          <LottieClientWrapper />
          <p className="text-center md:text-start text-gray-500 text-wrap md:text-[28px] font-normal">
            I&apos;m here to support your business through web development,
            offering solutions and a commitment to{" "}
            <span className="font-bold text-2xl md:text-7xl text-[#0d97c5]">
              Excellence
            </span>
          </p>
        </div>
        <div className="flex-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden hidden md:block">
            <Image
              src="/images/profile-id.jpg"
              alt="Profile Photo"
              width={400}
              height={400}
              className="object-contain"
              priority={true}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
