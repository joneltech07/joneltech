"use client";
import styles from "./style.module.scss";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { useMenuActions } from "@/store/useMenuStore";
import { cn } from "@/lib/utils";

export default function Header() {
  // 2. Get the menu open/close state and toggle function fro;m Zustand
  const { isMenuOpen, toggleMenu } = useMenuActions();

  return (
    <>
      <div className={cn(styles.main, "hidden md:block")}>
        <div className={styles.header}>
          <div
            onClick={() => {
              toggleMenu();
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isMenuOpen ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isMenuOpen && <Nav />}</AnimatePresence>
    </>
  );
}
