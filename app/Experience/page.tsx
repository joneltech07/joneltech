"use client";

import AnimatedText from "@/components/AnimatedText";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { experienceCardDetails } from "@/constants/experience";
import React from "react";

type ExperienceProps = {
  ref: HTMLDivElement | null;
};

const Experience = React.forwardRef<HTMLDivElement, ExperienceProps>(
  function Experience(_props, ref) {
    return (
      <section
        ref={ref}
        className="py-[200px] flex items-center flex-col space-y-3 gap-4 px-6 sm:px-14"
      >
        <AnimatedText
          once
          text="Experience"
          className="font-bold text-3xl text-[#0a2c42]"
        />

        {experienceCardDetails.map((item, idx) => (
          <FadeInOnScroll
            delay={0.1 * (idx + 1)}
            yOffset={10}
            key={idx}
            className="shadow rounded-2xl flex gap-4 p-10 w-[70%]"
          >
            <div className="p-4 flex-1 rounded-2xl bg-slate-100">
              <p className="rounded-full bg-[#0d97c5] text-sm px-2 font-bold text-white inline">
                {item.range}
              </p>
              <p className="text-sm font-bold">{item.job_title}</p>
              <p className="text-muted-foreground">{item.company}</p>
            </div>
            <div className="p-3 flex-2 text-wrap text-slate-500">
              {item.description}
            </div>
          </FadeInOnScroll>
        ))}
      </section>
    );
  }
);

export default Experience;
