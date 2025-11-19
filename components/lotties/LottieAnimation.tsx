"use client";

import { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

interface LottieAnimationProps {
  animationData: string | object; // Lottie JSON can be file path or object
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  style = {},
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent SSR issues

  return (
    <Player autoplay={autoplay} loop={loop} src={animationData} style={style} />
  );
};

export default LottieAnimation;
