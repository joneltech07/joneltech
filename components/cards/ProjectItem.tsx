import { cn } from "@/lib/utils";
import { YouTubeEmbed } from "@next/third-parties/google";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface ProjectItemProps {
  vidId: string;
  title: string;
  desc: string;
  className?: string;
}

export default function ProjectItem({
  vidId,
  title,
  desc,
  className = "",
}: ProjectItemProps) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReversed = className.includes("md:flex-row-reverse");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center 30%",
        end: "bottom top",
        scrub: true,
      },
    });

    if (isReversed) {
      tl.to(videoRef.current, { x: 500, opacity: 0, duration: 1.5 }).to(
        textRef.current,
        { x: -500, opacity: 0, duration: 1.5 },
        "<"
      );
    } else {
      tl.to(videoRef.current, { x: -500, opacity: 0, duration: 1.5 }).to(
        textRef.current,
        { x: 500, opacity: 0, duration: 1.5 },
        "<"
      );
    }

    return () => {
      tl.kill();
    };
  }, [className]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden flex flex-col justify-center items-center",
        className
      )}
    >
      <div
        ref={videoRef}
        className="hidden md:block w-full md:w-[360px] overflow-hidden rounded-none md:rounded-2xl"
      >
        <YouTubeEmbed videoid={vidId} height={200} width={360} />
      </div>
      <div
        ref={textRef}
        className="p-3 md:w-[500px] flex flex-col gap-3 text-start"
      >
        <p className="font-bold text-1xl text-center md:text-start">{title}</p>
        <div className="flex-1 flex">
          <p className="text-xs">{desc}</p>
        </div>
      </div>
    </div>
  );
}
