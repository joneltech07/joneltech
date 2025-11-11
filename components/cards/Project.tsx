"use client";

import { ytCardDetails } from "@/constants/socialLinks";
import React from "react";
import ProjectItem from "./ProjectItem";
import { cn } from "@/lib/utils";
import FadeInOnScroll from "../FadeInOnScroll";

export default function Project() {
  return (
    <div className="my-[10px] md:my-[50px] w-auto flex flex-col justify-center items-center">
      {ytCardDetails.map(({ id, title, desc }, idx) => (
        <FadeInOnScroll
          key={idx}
          delay={idx * 0.1}
          yOffset={10}
          className="w-full"
        >
          <ProjectItem
            vidId={id}
            title={title}
            desc={desc}
            className={cn(
              "flex flex-col justify-evenly w-full my-[10px] md:my-[50px]",
              idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            )}
          />
        </FadeInOnScroll>
      ))}
    </div>
  );
}
