import "./Player.scss"
import * as THREE from 'three';
import { useFrame, ThreeElements } from "@react-three/fiber";
import {useRef, useState} from "react"
import { Cylinder, OrbitControls } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";


function Player(props: ThreeElements['mesh']){

    const ball1Ref:any = useRef();
    const ball2Ref:any = useRef();

    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    // useFrame((_state, _delta) => (ball1Ref.current.rotation.x += 0.02, ball2Ref.current.rotation.y += 0.02));

    //!crate reusable functions for body parts
    //! call functions to create parts

    let hand = <mesh 
    {...props}
    ref={ball1Ref}
    scale={0.5}
    onClick={(_event) => click(!clicked)}
    onPointerOver={(_event) => hover(true)}
    onPointerOut={(_event) => hover(false)}
    position={[1,1,0]} 
    name="hand"
    onPointerDown={e => {
        e.stopPropagation()
        
    }}
    >
    <sphereGeometry args={[1,10,10]}  />
    <meshStandardMaterial
        color={hovered ? "darkRed" : "white"}
    />
    </mesh>;

    return(
        <>
        
        <mesh
        {...props}
        ref={ball2Ref}
        scale={clicked ? 1.3 : 1}
        onClick={(_event) => click(!clicked)}
        onPointerOver={(_event) => hover(true)}
        onPointerOut={(_event) => hover(false)}
        position={[-1,1,0]}
        rotation={[Math.PI/2, 0, 0]}
        visible 
        userData={{ hello: 'world' }}
        >
        <sphereGeometry args={[1,10,10]}  />
        <meshStandardMaterial
            color={hovered ? "blue" : "white" } 
        />
        </mesh>
        {hand}
        </>
    )
}

export default Player