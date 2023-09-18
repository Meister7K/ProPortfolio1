import { useRef, useState, useEffect } from "react";
import "./Home.scss";
import TextStyle from "../../textStyle/TextStyle";
import { TextFlipper } from "../../textFlipper/TextFlipper";
import { HashLink as Linkz } from "react-router-hash-link";
import { Canvas } from "@react-three/fiber";



import { HomeCanvas } from "../../homeCanvas/HomeCanvas";


function Home(_props: any) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const titleArray = ["Web Developer", "Problem Solver", "Sports Junkie", "Visual Creative", "software Engineer", "Project Coordinator"]


  useEffect(() => {

    const video = document.getElementById("video") as HTMLElement;

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
      className={`page home-container ${isVisible ? "visible-comp" : "invisible-comp"
        }`}
      ref={elementRef}
    >
      <div className="mask">
        <div className="port no-select">
          <TextStyle />
        </div>
      </div>
      <div className="mask">
        <h3 className="port2 flipper no-point">
          <TextFlipper textArr={titleArray} />
        </h3>
      </div>
      <div className="mask">
        <div className="port3 no-select">
          <Linkz to="#projects" smooth>
            <h1 className="enter">	&#8681;</h1>
          </Linkz>
        </div>
      </div>
      <div className="home-canvas" id="canv">
        <Canvas className="home-canvas" shadows>
        <HomeCanvas />
        
      </Canvas>
    </div>
      
      
    </div >
  );
}

export default Home;
