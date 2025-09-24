import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const BlurReveal = ({ 
  text, 
  className = '', 
  delay = 0,
  duration = 1.5,
  blurAmount = 8,
  revealDistance = 40
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    // Clear previous animations
    gsap.killTweensOf(textEl);

    // Initial state - hidden below with blur
    gsap.set(textEl, {
      y: revealDistance,
      opacity: 0,
      filter: `blur(${blurAmount}px)`
    });

    // Animation - reveal from bottom
    gsap.to(textEl, {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration,
      delay,
      ease: 'back.out(1.2)'
    });

  }, [text, delay, duration, blurAmount, revealDistance]);

  return (
    <div style={{ display: 'inline-block', overflow: 'hidden' }}>
      <div ref={textRef} className={`${className}`}>
        {text}
      </div>
    </div>
  );
};

export default BlurReveal;