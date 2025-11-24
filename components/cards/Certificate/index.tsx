"use client";

import Image from "next/image";
import { useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface CertificateProps {
  i: number;
  title: string;
  description: string;
  organization_name: string;
  color: string;
  link: string;
  logo: string;
  date: string;
  id: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Certificate: React.FC<CertificateProps> = ({
  i,
  title,
  description,
  organization_name,
  color,
  link,
  logo,
  date,
  id,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] w-[1000px] h-auto md:h-[400px] rounded-[25px] p-[50px] origin-top"
      >
        <div className="flex flex-col gap-4">
          <div className="p-4 flex-1 flex gap-4 rounded-2xl bg-white">
            <div>
              <Image
                src={logo}
                width={50}
                height={50}
                alt={title}
                className="rounded"
              />
            </div>
            <div className="text-xs">
              <p className="text-sm font-bold">{title}</p>
              <p className="text-sm text-muted-foreground">
                {organization_name}
              </p>
              <p className="text-muted-foreground">Issued {date}</p>
              <p className="text-muted-foreground">Credential ID {id}</p>
            </div>
          </div>
          <div className="p-3 flex-2 text-wrap text-white">{description}</div>
          <Button
            asChild
            className="rounded-full w-[150px] h-7 text-xs bg-transparent font-bold text-white"
            variant="outline"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Show credential <ExternalLink />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Certificate;
