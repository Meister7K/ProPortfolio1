import GameCanvas from "../../game_setup/GameCanvas"
import "./Game.scss"




function Game(props:any){
    return(
        <div id="game">
        <GameCanvas/>
        </div>
    )
}

export default Game