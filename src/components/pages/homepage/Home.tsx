import { useRef, useState, useEffect } from "react";
import "./Home.scss"

import { HashLink as Linkz } from "react-router-hash-link";

function Home(props:any){

    const contentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const visiblePercentage = entry.intersectionRatio * 100;
  
          // Determine if the element should be visible based on your threshold
          const isVisibleThreshold = visiblePercentage >= 30; // Adjust threshold percentage
  
          setIsVisible(isVisibleThreshold);
        },
        { threshold: [0, 0.5, 1] } // Intersection ratios to observe (0%, 50%, 100%)
      );
  
      if (contentRef.current) {
        observer.observe(contentRef.current);
      }
  
      return () => {
        if (contentRef.current) {
          observer.unobserve(contentRef.current);
        }
      };
    }, []);
    return(
        <div id="home" className={`page home-container ${isVisible ? 'visible-comp': 'invisible-comp'}`} ref={contentRef}>
            
            <Linkz to='#about' smooth>
                <button className="btn enter">click or scroll to continue</button>
            </Linkz>
        </div>
    )
}

export default Home