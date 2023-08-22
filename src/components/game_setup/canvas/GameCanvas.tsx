import "./GameCanvas.scss";
import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import Scene from "../scene/Scene";
import { Html, KeyboardControls, Sky, useProgress, Stats } from "@react-three/drei";
import { Menu } from "../menu/Menu";
import {useEffect } from 'react';
import { create } from 'zustand'
import { AnimationMixer } from "three";

export const useStore = create(() => ({
  groundObjects: {},
  actions: {},
  mixer: new AnimationMixer()
}))

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

function GameCanvas({ isOn }: any) {

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

  useEffect(()=>{

  })

  return (
    <div className="game-container">
      <KeyboardControls map={keyMap}>
        <Canvas
          className="game"
          id="game-canvas"
          shadows 
          onPointerDown={(e) => e.target.requestPointerLock()}
          // camera={{ position: [0, 10, 20], fov: 45 }}
        >
          <Suspense fallback={<Loader/>}>
          <Sky sunPosition={[500,20,500]} />
          <fog attach="fog" args={["white", 300, 400]} />
          
            <Physics debug gravity={[0,-30,0]} >
              <Scene name="scene" />
            </Physics>
            <Stats/>
          </Suspense>
        </Canvas>
        <Menu />
      </KeyboardControls>
    </div>
  );
}

export default GameCanvas;
