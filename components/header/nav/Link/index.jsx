// components/Link/index.tsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';
import { useMenuActions } from '@/store/useMenuStore';

export default function Index({ data, isActive, setSelectedIndicator }) {

  const { title, href, index } = data;

  // ⭐️ Get the necessary actions from Zustand
  const { scrollToSection, toggleMenu } = useMenuActions();

  const handleClick = (e) => {
    // Prevent default anchor link behavior
    e.preventDefault();

    // 1. Call the store's action to scroll
    scrollToSection(href);

    // 2. Close the mobile menu (calls toggleMenu)
    toggleMenu();

  }

  return (
    <motion.div
      className="relative flex items-center text-[20px]"
      // onMouseEnter={() => { setSelectedIndicator(href) }} // Keep hover effect
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[10px] h-[10px] bg-white rounded-[50%] absolute left-[-30px]"
      ></motion.div>

      <a onClick={handleClick} href={`#${href}`}>
        {title}
      </a>
    </motion.div>
  );
}