"use client";
import React from "react";
import { motion } from "framer-motion";
import { menuSlide, slide, scale } from "../anim";

export default function MenuExample() {
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 left-0 w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center"
    >
      {navItems.map((item, index) => (
        <motion.div
          key={index}
          custom={index} // Pass index as custom to slide variants
          variants={slide}
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-4 text-2xl font-bold"
        >
          {item}
        </motion.div>
      ))}

      <motion.div
        variants={scale}
        initial="closed"
        animate="open"
        exit="closed"
        className="mt-10 p-4 bg-blue-500 rounded-lg"
      >
        Call to Action
      </motion.div>
    </motion.div>
  );
}
