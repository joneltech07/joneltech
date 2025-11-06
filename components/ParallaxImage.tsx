"use client"

import { useLenis } from "lenis/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

export default function ParallaxImage({src, alt, width, height, className, priority}: {src: string, alt: string, width: number, height: number, className?: string, priority?: boolean}) {

    const imageRaf = useRef<HTMLImageElement | null>(null);
    const bounds = useRef<{ top: number; bottom: number } | null>(null);
    const currentTranslateY = useRef<number>(0);
    const targetTranslateY = useRef<number>(0);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const updateBounds = () => {
            if (imageRaf.current) {
                const rect = imageRaf.current.getBoundingClientRect();
                bounds.current = {
                    top: rect.top + window.scrollY,
                    bottom: rect.bottom + window.scrollY,
                };
            }
        };

        updateBounds();
        window.addEventListener("resize", updateBounds);

        const animate = () => {
            if (imageRaf.current) {
                currentTranslateY.current = lerp(
                    currentTranslateY.current,
                    targetTranslateY.current,
                    0.1
                );

                if (Math.abs(currentTranslateY.current - targetTranslateY.current) < 0.1) {
                    imageRaf.current.style.transform = `translateY(${targetTranslateY.current}px) scale(1.25)`;
                }
            }

            rafId.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", updateBounds);

            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    useLenis(({ scroll }) => {
        if (!bounds.current) return;
        const relativeScroll = scroll - bounds.current.top;
        targetTranslateY.current = relativeScroll * 0.2;
    });

  return (
    <Image 
        ref={imageRaf}
        width={width}
        height={height}
        src={src}
        alt={alt}
        style={{
            willChange: "transform",
            transform: "translateY(0) scale(1.25)",
        }}
        className={className}
        priority={priority}
    />
  )
}