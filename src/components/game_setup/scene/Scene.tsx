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

function Scene(props: ThreeElements["mesh"]) {
//   const ball1Ref: any = useRef();
//   const ball2Ref: any = useRef();

//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);

  // useFrame((_state, _delta) => (ball1Ref.current.rotation.x += 0.02, ball2Ref.current.rotation.y += 0.02));

  //!crate reusable functions for body parts
  //! call functions to create parts

  return (
    <>
      <OrbitControls />
      {/* Lights */}
      <ambientLight intensity={1} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        color={"white"}
      />
      {/* stage */}
      <group position-y={0.5}>
        <RigidBody colliders={false} type="fixed" position-y={-0.5} friction={5}>
        <CylinderCollider args={[1 / 2, 5]} />
        <Cylinder scale={[.5, .1, .5]} receiveShadow />
        <meshStandardMaterial color="gray" />
      </RigidBody>
      </group>
      

      {/* Background */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
        mirror={0}
          blur={[1, 1]}
          resolution={1024}
          mixBlur={1}
          mixStrength={15}
          depthScale={1}
          minDepthThreshold={0.85}
          color="silver"
          metalness={0.6}
          roughness={1}
        />


        
      </mesh>
      {/* Players */}
      <PlayerController/>

      {/* Enemies */}
      
    </>
  );
}

export default Scene;
