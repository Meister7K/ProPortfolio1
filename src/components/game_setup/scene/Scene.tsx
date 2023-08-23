import { OrbitControls } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import { Ground } from "../objects/Ground";
import { Platform } from "../objects/Platform";
import { Pole } from "../objects/Pole";
import { PlayerController } from "../player/PlayerController";
import "./Scene.scss";


function Scene(props: ThreeElements["mesh"]) {



 

  //!crate reusable functions for body parts
  //! call functions to create parts

  return (
    <>
      <OrbitControls />
      {/* Lights */}
      <ambientLight intensity={1} />
      <pointLight castShadow intensity={0.8} position={[100,100,100]}/>
      {/* stage */}
      <Platform/>
      {/* Objects */}
      <Pole />

      {/* Background */}
     <Ground />

      {/* Players */}
      <PlayerController/>

      {/* Enemies */}
    </>
  );
}

export default Scene;
