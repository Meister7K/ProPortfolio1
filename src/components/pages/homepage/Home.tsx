import { useRef, useState, useEffect } from "react";
import "./Home.scss";

import { HashLink as Linkz } from "react-router-hash-link";

function Home(_props: any) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  

  useEffect(() => {

    const video = document.getElementById("video")as HTMLElement;

  video.style.opacity = '.7';


    const handleScroll = () => {
      if (!elementRef.current) 
      return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();

      if (
        rect.bottom >= window.innerHeight / 2 &&
        rect.top <= window.innerHeight / 2
      ) {
        setIsVisible(true);
        
        video.style.filter = "blur(0)"
      } else {
        setIsVisible(false);
        
        video.style.filter = "blur(5px)";
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
      id="home"
      className={`page home-container ${
        isVisible ? "visible-comp" : "invisible-comp"
      }`}
      ref={elementRef}
    >
      <Linkz to="#about" smooth>
        <button className="btn enter">click or scroll to continue</button>
      </Linkz>
    </div>
  );
}

export default Home;
