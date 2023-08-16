import GameCanvas from "../../game_setup/canvas/GameCanvas"
import "./Game.scss"
//import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


function Game(props:any){

    const [isGameStarted, setIsGameStarted] = useState(false);

    const startGame = () => {
      setIsGameStarted(true);
    };

    const exitGame = () => {
        setIsGameStarted(false);
      };

      useEffect(() => {
        const handleScroll = (e) => {
          if (isGameStarted) {
            e.preventDefault();
          }
        };
    
        window.addEventListener('wheel', handleScroll, { passive: false });
    
        return () => {
          window.removeEventListener('wheel', handleScroll);
        };
      }, [isGameStarted]);

    return(
        <div id="game" className="page">
            <h1>Lets play a game</h1>
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