import GameCanvas from "../../game_setup/GameCanvas"
import "./Game.scss"




function Game(props:any){
    return(
        <div id="game">
            <h1>Lets play a game</h1>
        <GameCanvas/>
        </div>
    )
}

export default Game