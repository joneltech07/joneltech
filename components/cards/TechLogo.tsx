import { icons } from "@/constants/techMaps";
import Image from "next/image";
import React from "react";
import ZoomOnHover from "../ZoomOnHover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FadeInOnScroll from "../FadeInOnScroll";

export default function TechLogo() {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center mt-[50px]">
      {icons.map((item, idx) => (
        <Tooltip key={idx}>
          <TooltipTrigger>
            <ZoomOnHover scale={1.5} yOffset={-3}>
              <FadeInOnScroll delay={0.3} yOffset={100} duration={1.2}>
                <Image
                  src={`/images/${item.icon}`}
                  alt="images"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </FadeInOnScroll>
            </ZoomOnHover>
          </TooltipTrigger>
          <TooltipContent>
            <p>{item.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
