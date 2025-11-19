"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
  amount?: "some" | "all" | number;
  className?: string;
  style?: React.CSSProperties;
}

const fadeInScrollVariants: Variants = {
  hidden: (custom: number) => ({
    opacity: 0,
    y: custom,
  }),
  visible: {
    opacity: 1,
    y: 0,
  },
};

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 50,
  once = true,
  amount = 0.2,
  className,
  style,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      variants={fadeInScrollVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={yOffset}
      transition={{
        type: "tween", // Correct type
        ease: "easeOut", // Correct easing
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
