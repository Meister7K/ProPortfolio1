import "./GameCanvas.scss"
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import Player from "../player/Player";


function GameCanvas(props:any){
    return(
        <div className="game-container">
            <Canvas className="game" id="game-canvas" flat linear> 
            <ambientLight intensity={.1} />
            <camera/>
            <directionalLight color="red" position={[.5, -10, 10]} />
                <pointLight position={[1,1,1]}/>
                <Player position={[0, 0, 0]}/>
                
            </Canvas>
        </div>
    )
}

export default GameCanvas