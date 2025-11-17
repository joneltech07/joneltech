import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";
import { useMenuActions } from "@/store/useMenuStore";

const navItems = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About Me",
    href: "about",
  },
  {
    title: "Tech Stack",
    href: "stack",
  },
  {
    title: "Experience",
    href: "experience",
  },
  {
    title: "Projects",
    href: "projects",
  },
];

export default function Index() {
  const { sectionName } = useMenuActions();

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={`#${sectionName}` == `#${data.href}`}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
