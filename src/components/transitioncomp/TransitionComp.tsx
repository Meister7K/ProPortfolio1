import { useState, useRef, useEffect } from "react";

export const TransitionComp = ({ children }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();

      if (
        rect.bottom >= window.innerHeight / 2 &&
        rect.top <= window.innerHeight / 2
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-transition ${
        isVisible ? "visible-comp" : "invisible-comp"
      }`}
    >
      {children}
    </div>
  );
};
