import "./Support.scss"
import Button from "../../button/Button"
import { useRef, useState, useEffect } from "react";

function Support(props:any){

    const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const visiblePercentage = entry.intersectionRatio * 100;

        // Determine if the element should be visible based on your threshold
        const isVisibleThreshold = visiblePercentage >= 50; // Adjust threshold percentage

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
        <div id="support" className={`page ${isVisible ? 'visible-comp': 'invisible-comp'}`} ref={contentRef}>
            <h3  className="support-title">Feeling Generous?</h3>
            <div className="mask">
                <p className="support-pl"> feel free to support me on my journey into the field of web development!</p>
                
            
            
            <br/>
            <Button id="venmo" text="Venmo" href="https://venmo.com/u/MR-7K"/>

            <br/>
            
            <p className="support-pr"> Welcome to my 2003 myspace page animation style</p>
            </div>
        </div>
    )
}

export default Support