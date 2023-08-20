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

      // const contentRef = useRef(null);
      // const [isVisible, setIsVisible] = useState(false);
    
      // useEffect(() => {
      //   const observer = new IntersectionObserver(
      //     (entries) => {
      //       const entry = entries[0];
      //       const visiblePercentage = entry.intersectionRatio * 100;
    
      //       // Determine if the element should be visible based on your threshold
      //       const isVisibleThreshold = visiblePercentage >= 50; // Adjust threshold percentage
    
      //       setIsVisible(isVisibleThreshold);
      //     },
      //     { threshold: [0, 0.5, 1] } // Intersection ratios to observe (0%, 50%, 100%)
      //   );
    
      //   if (contentRef.current) {
      //     observer.observe(contentRef.current);
      //   }
    
      //   return () => {
      //     if (contentRef.current) {
      //       observer.unobserve(contentRef.current);
      //     }
      //   };
      // }, []);

    return(
        <div id="game" className={`page`}>
            <h1><TextCreator text="Lets Play a Game" speed={100}/></h1>
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