import GameCanvas from "../../game_setup/canvas/GameCanvas"
import { TextCreator } from "../../textCreator/TextCreator";
import "./Game.scss"
//import { Link } from "react-router-dom"
import { useState } from "react"



function Game(props:any){

    const [isGameStarted, setIsGameStarted] = useState(false);

    const startGame = () => {
      setIsGameStarted(true);
    };

    const exitGame = () => {
        setIsGameStarted(false);
      };

   

    return(
        <div id="game" className="page">
            <h1><TextCreator text="L ets lay a game" speed={100}/></h1>
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