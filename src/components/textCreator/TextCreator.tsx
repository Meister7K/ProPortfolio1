import './TextCreator.scss';
import React, { useState, useEffect, useRef } from 'react';

export const TextCreator = ({ text, speed }: any) => {
  const [typedText, setTypedText] = useState('');
  const textRef = useRef(null); // Ref for the component

  useEffect(() => {
    const element = textRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
          if (currentIndex < text.length - 1) {
            setTypedText((prevText) => prevText + text[currentIndex]);
            currentIndex++;
          } else {
            clearInterval(typingInterval);
          }
        }, speed);

        // Disconnect the observer after the animation starts
        observer.disconnect();
      }
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [text, speed]);

  return (
    <span ref={textRef} className="typing-text">
      {typedText}
      <span className="text-cursor">|</span>
    </span>
  );
};

