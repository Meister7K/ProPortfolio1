import { useRef, useState, useEffect } from "react";
import "./Home.scss"

import { HashLink as Linkz } from "react-router-hash-link";

function Home(props:any){

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
        <div id="home" className={`page home-container ${isVisible ? 'visible-comp' : 'invisible-comp'}`} ref={elementRef}>
            
            <Linkz to='#about' smooth>
                <button className="btn enter">click or scroll to continue</button>
            </Linkz>
        </div>
    )
}

export default Home