// anim.ts
import { Variants } from "framer-motion";

// Menu slide animation
export const menuSlide: Variants = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

// Slide animation for list items or elements with custom index
export const slide: Variants = {
  initial: (i: number) => ({
    x: 80,
    opacity: 0,
  }),
  enter: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.05 * i,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  }),
  exit: (i: number) => ({
    x: 80,
    opacity: 0,
    transition: {
      duration: 0.8,
      delay: 0.05 * i,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  }),
};

// Scale animation for pop-in/pop-out
export const scale: Variants = {
  open: {
    scale: 1,
    transition: { duration: 0.3 },
  },
  closed: {
    scale: 0,
    transition: { duration: 0.4 },
  },
};
