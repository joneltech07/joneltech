// components/ZoomOnHover.tsx
"use client"; // This component uses Framer Motion, so it must be a Client Component

import React from "react";
import { motion } from "framer-motion";

interface ZoomOnHoverProps {
  children: React.ReactNode;
  scale?: number; // How much to zoom in (e.g., 1.05 for 5% zoom)
  yOffset?: number; // How much to lift the element on hover (e.g., -5 for a slight upward lift)
  transitionDuration?: number; // Duration of the animation in seconds
  className?: string; // Optional class names to apply to the motion.div
  style?: React.CSSProperties; // Optional inline styles
}

/**
 * A reusable component that applies a zoom-in and optional lift effect on hover
 * using Framer Motion.
 *
 * @param {ZoomOnHoverProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to be wrapped by the hover effect.
 * @param {number} [props.scale=1.05] - The scale factor on hover (e.g., 1.05 for 5% zoom).
 * @param {number} [props.yOffset=-5] - The y-axis offset on hover (e.g., -5 for a slight lift).
 * @param {number} [props.transitionDuration=0.2] - The duration of the transition in seconds.
 * @param {string} [props.className] - Optional class names for the wrapper div.
 * @param {React.CSSProperties} [props.style] - Optional inline styles for the wrapper div.
 * @returns {JSX.Element} The wrapped content with the hover effect.
 */
const ZoomOnHover: React.FC<ZoomOnHoverProps> = ({
  children,
  scale = 1.05,
  yOffset = -5,
  transitionDuration = 0.2,
  className,
  style,
}) => {
  return (
    <motion.div
      className={className}
      style={{
        display: "inline-block", // Ensures the div wraps its content tightly by default
        ...style,
      }}
      whileHover={{
        scale: scale, // Zoom in
        y: yOffset, // Lift slightly
      }}
      transition={{
        type: "tween", // A basic, smooth transition type
        duration: transitionDuration, // How long the animation takes
        ease: "easeOut", // Easing function for a natural feel
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomOnHover;
