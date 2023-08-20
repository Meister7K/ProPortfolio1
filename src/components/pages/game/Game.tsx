import GameCanvas from "../../game_setup/canvas/GameCanvas"
import { TextCreator } from "../../textCreator/TextCreator";
import "./Game.scss"
//import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"



function Game(props:any){

    const [isGameStarted, setIsGameStarted] = useState(false);

    const startGame = () => {
      setIsGameStarted(true);
    };

    const exitGame = () => {
        setIsGameStarted(false);
      };

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
        <div id="game" ref={elementRef} className={`page ${isVisible ? 'visible-comp' : 'invisible-comp'}`}>
            <h1><TextCreator text="L ets Play a Game" speed={100}/></h1>
            <details>
                <summary>click here for running tips</summary>
                <p>
                    For better runtime in Chrome, enable Hardware Acceleration under Settings&gt;System
                </p>
            </details>
            <br/>
            {!isGameStarted ? (
        <button className="btn game-btn" onClick={startGame}>Play Game</button>
      ) : (
        // Render the GameCanvas component here
        <div>

        <GameCanvas />
        <button className="btn exit" onClick={exitGame}>X</button>
        </div>
      )}
        
        </div>
    )
}

export default Game