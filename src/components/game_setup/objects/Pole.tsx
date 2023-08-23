import { MeshCollider, RapierRigidBody, RigidBody, quat } from "@react-three/rapier"
import { logTexture } from "../../../assets/images/textures/textures"
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


export const Pole = (props:any)=>{


  const ref = useRef<RapierRigidBody>(null);
  const speed = useRef(1)

  // useEffect(() => {
  //   if(ref.current){
  //     ref.current.addTorque({x:0,y:0,z:0}, true)
  //   }
  // },[])

  useFrame((_state, delta)=>{

    // if(start){
      const curRotation = quat(ref.current.rotation());
    const incrementRotation = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 0, 1),
      delta/8 * speed.current
    );
    curRotation.multiply(incrementRotation);
    ref.current.setNextKinematicRotation(curRotation);

    speed.current += delta;
    // }
    
  })

   return(
    <>
    <group>
    <RigidBody ref={ref}
    {...props}
        rotation={[Math.PI/2,0,Math.PI/2]}
      type="kinematicPosition"
      position={[0,2.5,0]}
      collider={false}
    >
      <MeshCollider type='hull'>

        <mesh receiveShadow  >
        <cylinderGeometry args={[.5,.5,20]}/>
        <meshStandardMaterial map={logTexture} map-repeat={[240,240]} color="lightgray"/>
        
      </mesh>
      </MeshCollider>
      
      
    </RigidBody>
  </group>
    </>
    
   ) 
}