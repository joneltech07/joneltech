"use client";

import dynamic from "next/dynamic";
import animationJson from "@/public/lotties/robot-hello-animation.json";

// Dynamically import the LottieAnimation component and set ssr to false
const LottieAnimation = dynamic(
  () => import("@/components/lotties/LottieAnimation"),
  { ssr: false }
);

const LottieClientWrapper = () => {
  return (
    <LottieAnimation animationData={animationJson} style={{ width: '200px', height: '200px' }} />
  );
};

export default LottieClientWrapper;