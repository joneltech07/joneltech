import { cn } from "@/lib/utils";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { VisuallyHidden } from "radix-ui";
import { YouTubeEmbed } from "@next/third-parties/google";

import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FadeInOnScroll from "../FadeInOnScroll";

interface More {
  id?: string;
  images?: string[]; // optional
  descs: string[];
}

interface ProjectItemProps {
  thumbnail: string;
  title: string;
  desc: string;
  className?: string;
  type: string;
  more: More;
}

export default function ProjectItem({
  thumbnail,
  title,
  desc,
  more,
  type,
  className = "",
}: ProjectItemProps) {
  const containerRef = useRef(null);
  const thumbnailRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isReversed = className.includes("md:flex-row-reverse");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "start 10%",
        end: "bottom top",
        scrub: true,
      },
    });

    if (isReversed) {
      tl.to(thumbnailRef.current, { x: 500, opacity: 0, duration: 1.5 }).to(
        textRef.current,
        { x: -500, opacity: 0, duration: 1.5 },
        "<"
      );
    } else {
      tl.to(thumbnailRef.current, { x: -500, opacity: 0, duration: 1.5 }).to(
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
        ref={thumbnailRef}
        className="w-full md:w-[360px] overflow-hidden rounded-none md:rounded-2xl"
      >
        <Image src={thumbnail} alt={thumbnail} height={200} width={360} />
      </div>
      <div
        ref={textRef}
        className="p-3 md:w-[500px] flex flex-col gap-3 items-center md:items-start text-start"
      >
        <p className="font-bold text-1xl text-center md:text-start">{title}</p>
        <div className="flex-1 flex">
          <p className="text-xs">{desc}</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-[100%] md:w-[100px] h-9 md:h-7 text-xs rounded-full bg-[#194660]">
              More details
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[100%] md:h-screen border-none shadow-none"
            style={{ zIndex: 9999 }}
          >
            <VisuallyHidden.Root>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </VisuallyHidden.Root>

            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center">
              <FadeInOnScroll
                delay={0.7}
                yOffset={10}
                className="flex-1 md:p-20"
              >
                <ul className="list-disc w-[70%]">
                  {more.descs.map((desc, idx) => (
                    <li key={idx} className="text-wrap text-xs">
                      {desc}
                    </li>
                  ))}
                </ul>
              </FadeInOnScroll>

              <FadeInOnScroll
                delay={0.3}
                yOffset={10}
                className="relative flex-1 p-3 md:p-[30px]"
              >
                {type === "img" && more.images?.length ? (
                  <Carousel
                    className="p-0"
                    plugins={[
                      Autoplay({
                        delay: 5000,
                      }),
                    ]}
                  >
                    <CarouselContent>
                      {more.images.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <div className="p-0">
                            <Card className="border-0">
                              <CardContent className="flex aspect-auto items-center justify-center p-0">
                                <a
                                  href={image}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Image
                                    src={image}
                                    alt={`Project image ${idx + 1}`}
                                    width={500}
                                    height={100}
                                    className="object-fill rounded-2xl overflow-hidden"
                                  />
                                </a>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                ) : (
                  <div className="flex justify-center items-center w-[80%] md:w-[360px] overflow-hidden rounded-none md:rounded-2xl">
                    {more.id && (
                      <YouTubeEmbed
                        videoid={more.id}
                        height={200}
                        width={360}
                      />
                    )}
                  </div>
                )}
              </FadeInOnScroll>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
