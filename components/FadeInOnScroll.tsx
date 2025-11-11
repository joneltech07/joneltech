// components/FadeInOnScroll.tsx
"use client"; // Required for Framer Motion

import React from "react";
import { motion, Variants } from "framer-motion";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number; // Delay after the element enters view before animation starts
  duration?: number; // Duration of the fade animation
  yOffset?: number; // Starting Y position offset (e.g., 50px lower)
  once?: boolean; // Whether the animation should only run once (recommended)
  amount?: "some" | "all" | number; // How much of the element must be visible to trigger
  className?: string; // Optional class names
  style?: React.CSSProperties; // Optional inline styles
}

// Define the animation variants
const fadeInScrollVariants: Variants = {
  // Start state (applied initially and when out of view)
  hidden: (yOffset: number) => ({
    opacity: 0,
    y: yOffset,
  }),
  // End state (applied when the element is in view)
  visible: {
    opacity: 1,
    y: 0,
  },
};

/**
 * A reusable component that applies a smooth fade-in and slide-up effect
 * only when the content scrolls into the user's viewport.
 */
const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 50,
  once = true, // Default to true so it doesn't re-fire on every scroll
  amount = 0.2, // Default: 20% of the element must be visible
  className,
  style,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      variants={fadeInScrollVariants}
      // 1. Set the initial state to 'hidden'
      initial="hidden"
      // 2. Set the state to 'visible' when in view
      whileInView="visible"
      // 3. Define whether the animation should only happen once
      viewport={{ once: once, amount: amount }}
      // Pass the yOffset as a custom prop to the initial variant function
      custom={yOffset}
      transition={{
        type: "easeOut",
        duration: duration,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
