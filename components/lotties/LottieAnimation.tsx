"use client";

import { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottieAnimation = ({ animationData, loop = true, autoplay = true, style = {} }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Don't render anything on the server
  }

  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={animationData}
      style={style}
    />
  );
};

export default LottieAnimation;