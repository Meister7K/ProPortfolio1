import "./GameCanvas.scss";
import { Physics } from "@react-three/rapier";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import Scene from "../scene/Scene";
import { KeyboardControls } from "@react-three/drei";
import { GenerateGameLevel } from "../store/Store";
import { Menu } from "../menu/Menu";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

function GameCanvas(props: any) {
  //GenerateGameLevel({numberOfLevels: 5});

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

  return (
    <div className="game-container">
      <KeyboardControls map={keyMap}>
        <Canvas
          className="game"
          id="game-canvas"
          flat
          linear
          shadows
          camera={{ position: [0, 10, 20], fov: 30 }}
        >
          <color attach="background" args={["black"]} />
          <fog attach="fog" args={["white", 300, 400]} />
          <Suspense>
            <Physics debug>
              <Scene name="scene" />
            </Physics>
          </Suspense>
        </Canvas>
        <Menu />
      </KeyboardControls>
    </div>
  );
}

export default GameCanvas;
