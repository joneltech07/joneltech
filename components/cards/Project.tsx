"use client";

import { ytCardDetails } from "@/constants/projects";
import React from "react";
import ProjectItem from "./ProjectItem";
import { cn } from "@/lib/utils";
import FadeInOnScroll from "../FadeInOnScroll";

export default function Project() {
  return (
    <div className="my-[10px] md:my-[50px] w-auto flex flex-col justify-center items-center">
      {ytCardDetails.map(({ thumbnail, title, desc, more, type }, idx) => (
        <FadeInOnScroll
          key={idx}
          delay={idx * 0.1}
          yOffset={10}
          className="w-full px-3 md:p-0"
        >
          <ProjectItem
            thumbnail={thumbnail}
            title={title}
            desc={desc}
            more={more}
            type={type}
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
