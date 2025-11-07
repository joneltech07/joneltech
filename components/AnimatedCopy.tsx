"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";

type SplitResult = {
  words?: Element[] | Element;
  chars?: Element[];
  revert?: () => void;
};

export default function AnimatedCopy({
  children,
  colorInitial = "#aba9a9",
  colorAccent = "abff02",
  colorFinal = "#000000",
}: {
  children: React.ReactNode;
  colorInitial?: string;
  colorAccent?: string;
  colorFinal?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitRefs = useRef<
    Array<{ wordSplit: SplitResult; charSplit: SplitResult }>
  >([]);
  const lastScrollProgress = useRef<number>(0);
  const colorTransitionTimers = useRef<
    Map<number, ReturnType<typeof setTimeout>>
  >(new Map());
  const completedChars = useRef<Set<number>>(new Set());

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // Register plugins (safe to call multiple times)
    try {
      gsap.registerPlugin(ScrollTrigger, SplitText);
    } catch {
      /* ignore if already registered */
    }

    splitRefs.current = [];
    lastScrollProgress.current = 0;
    colorTransitionTimers.current.clear();
    completedChars.current.clear();

    let elements: Element[] = [];
    if (root.hasAttribute("data-copy-wrapper")) {
      elements = Array.from(root.children) as Element[];
    } else {
      elements = [root];
    }

    elements.forEach((element) => {
      // SplitText.create may not be available in all environments. Cast to SplitResult for typing.
      const wordSplit = SplitText.create(element, {
        type: "words",
        wordsClass: "word",
      }) as unknown as SplitResult;

      const charSplit = SplitText.create(
        wordSplit.words as unknown as Element,
        {
          type: "chars",
          charsClass: "char",
        }
      ) as unknown as SplitResult;

      splitRefs.current.push({ wordSplit, charSplit });
    });

    const allChars: Element[] = splitRefs.current.flatMap(
      ({ charSplit }) => charSplit.chars ?? []
    );

    // initialize color
    try {
      gsap.set(allChars as unknown as Element[], { color: colorInitial });
    } catch {
      // fail silently if GSAP can't set (e.g., server-side or missing elements)
    }

    const scheduleFinalTransition = (char: Element, index: number) => {
      const prev = colorTransitionTimers.current.get(index);
      if (prev) clearTimeout(prev);

      const timer = setTimeout(() => {
        if (!completedChars.current.has(index)) {
          try {
            gsap.to(char as unknown as Element, {
              duration: 0.1,
              ease: "none",
              color: colorFinal,
              onComplete: () => {
                completedChars.current.add(index);
              },
            });
          } catch {
            /* ignore */
          }
        }
        colorTransitionTimers.current.delete(index);
      }, 100);

      colorTransitionTimers.current.set(index, timer);
    };

    const st = ScrollTrigger.create({
      trigger: root,
      start: "top 90%",
      end: "top center",
      scrub: 1,
      onUpdate: (self: { progress: number }) => {
        const progress = self.progress;
        const totalChars = allChars.length;
        const isScrollingDown = progress >= lastScrollProgress.current;
        const currentCharIndex = Math.floor(progress * Math.max(1, totalChars));

        allChars.forEach((char, index) => {
          if (!isScrollingDown && index >= currentCharIndex) {
            const prev = colorTransitionTimers.current.get(index);
            if (prev) {
              clearTimeout(prev);
              colorTransitionTimers.current.delete(index);
            }
            completedChars.current.delete(index);
            try {
              gsap.set(char as unknown as Element, { color: colorInitial });
            } catch {}
            return;
          }

          if (completedChars.current.has(index)) return;

          if (index <= currentCharIndex) {
            try {
              gsap.set(char as unknown as Element, { color: colorAccent });
            } catch {}
            if (!colorTransitionTimers.current.has(index)) {
              scheduleFinalTransition(char, index);
            }
          } else {
            try {
              gsap.set(char as unknown as Element, { color: colorInitial });
            } catch {}
          }
        });

        lastScrollProgress.current = progress;
      },
    }) as { kill?: () => void };

    // copy refs to local vars for cleanup closure
    const timers = colorTransitionTimers.current;
    const splits = splitRefs.current.slice();

    return () => {
      try {
        if (st && st.kill) st.kill();
      } catch {}

      timers.forEach((t) => clearTimeout(t));
      timers.clear();

      splits.forEach(({ wordSplit, charSplit }) => {
        try {
          wordSplit?.revert?.();
          charSplit?.revert?.();
        } catch {}
      });
      splitRefs.current = [];
    };
  }, [colorInitial, colorAccent, colorFinal]);

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
