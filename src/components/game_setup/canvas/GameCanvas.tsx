import "./GameCanvas.scss";
import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useState } from "react";
import { Scene } from "./Scene";
import { Html, KeyboardControls, OrbitControls, Sky, useProgress} from "@react-three/drei";
import { Menu } from "../menu/Menu";
import {useEffect} from 'react';




export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

function useScrollLock() {
  useEffect(() => {
      // Lock scroll
      document.body.style.overflow = 'hidden';

      // Clean up on unmount
      return () => {
          // Unlock scroll
          document.body.style.overflow = 'auto';
      };
  }, []); // Run only once on component mount
}

function GameCanvas({ isOn, setIsGameStarted, isGameStarted}: any) {

 

  useScrollLock();

  if (!isOn) return null;

  const keyMap = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId: number | undefined;

  
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);


    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="game-container">
      <KeyboardControls map={keyMap}>
        <Canvas
          className="game"
          id="game-canvas"
          shadows 
           onPointerDown={(e) => (e.target as HTMLElement).requestPointerLock()}
           camera={{ position: [0, 10, 20], fov: 45 }}
        >
          <directionalLight
  intensity={0.5}
  castShadow // highlight-line
  shadow-mapSize-height={512}
  shadow-mapSize-width={512}
/>
          <ambientLight intensity={2}/>
          <OrbitControls/>
          <Suspense fallback={<Loader/>}>
          <Sky sunPosition={[500,20,500]} />
          
            <Physics gravity={[0,-50,0]} >
              <Scene name="scene" setIsGameStarted={setIsGameStarted} isGameStarted={isGameStarted} />
            </Physics>
          </Suspense>
        </Canvas>
        <Menu props={count}/>
      </KeyboardControls>
    </div>
  );
}

export default GameCanvas;
