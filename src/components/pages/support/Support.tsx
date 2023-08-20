import "./Support.scss"
import Button from "../../button/Button"
import { useRef, useState, useEffect } from "react";

function Support(props:any){

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!elementRef.current) return;
  
        const element = elementRef.current;
        const rect = element.getBoundingClientRect();
        console.log('t'+rect.top);
        console.log('b'+rect.bottom);
        console.log('el: '+element);
  
        // Check if the component is completely off the page
        if (rect.bottom >= window.innerHeight/2 && rect.top <= window.innerHeight/2)
        {
          setIsVisible(true);
        } else{
          setIsVisible(false);
        }
      };
  
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Call the scroll event handler initially to determine visibility
      handleScroll();
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    return(
        <div id="support" ref={elementRef} className={`page ${isVisible ? 'visible-comp' : 'invisible-comp'}`}>
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