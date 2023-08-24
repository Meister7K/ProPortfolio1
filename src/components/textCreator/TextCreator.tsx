import "./TextCreator.scss";
import { useState, useEffect, useRef } from "react";

export const TextCreator = ({ text, speed }: any) => {
  const [typedText, setTypedText] = useState("");
  const textRef = useRef<HTMLSpanElement | null>(null); // Ref for the component

  useEffect(() => {
    const element = textRef.current;
    if (element) {
    const observer = new IntersectionObserver((entries) => {
      let currentIndex = 0;

      if (entries[0].isIntersecting) {
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
