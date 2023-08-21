import "./Scene.scss";
import { useFrame, ThreeElements } from "@react-three/fiber";
//import { useRef, useState } from "react";
import {
  Cylinder,
  OrbitControls,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { PlayerController } from "../player/PlayerController";
import { Ground } from "../objects/Ground";

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
      <Ground/>

      {/* Background */}
     
      {/* Player */}
      <PlayerController />

      {/* Enemies */}
    </>
  );
}

export default Scene;
