import React, { useState, useEffect } from 'react';

const TypeWriter = ({ 
  text, 
  className = '', 
  delay = 0,
  speed = 50,
  cursorBlinkSpeed = 530
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (currentIndex === 0) {
      // Initial delay before typing starts
      const initialTimer = setTimeout(() => {
        setCurrentIndex(1);
      }, delay * 1000);
      return () => clearTimeout(initialTimer);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    }

    if (currentIndex > text.length) {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text, delay, speed]);

  // Cursor blink effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(cursorTimer);
  }, [cursorBlinkSpeed]);

  return (
    <div className={className} style={{ display: 'inline-block' }}>
      {displayedText}
      <span 
        style={{ 
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s',
          marginLeft: '2px'
        }}
      >
        |
      </span>
    </div>
  );
};

export default TypeWriter;

