import GameCanvas from "../../game_setup/canvas/GameCanvas"
import "./Game.scss"
import { Link } from "react-router-dom"
import Button from "../../button/Button"




function Game(props:any){
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
            <Link to='/game-canvas'>
                <Button text="Play Game"></Button>
            </Link>
        
        </div>
    )
}

export default Game