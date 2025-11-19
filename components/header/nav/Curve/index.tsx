"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./styles.module.scss";

export default function Index() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  if (height === 0) return null; // Avoid rendering until height is known

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${
    height / 2
  } 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${
    height / 2
  } 100 0`;

  const curve: Variants = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <svg className={styles.svgCurve} width="100%" height={height}>
      <motion.path
        fill="none"
        stroke="black"
        strokeWidth={2}
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
}
