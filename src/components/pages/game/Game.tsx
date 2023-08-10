import GameCanvas from "../../game_setup/canvas/GameCanvas"
import "./Game.scss"




function Game(props:any){
    return(
        <div id="game" className="page">
            <h1>Lets play a game</h1>
        <GameCanvas/>
        </div>
    )
}

export default Game