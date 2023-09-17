import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


export const HomeCanvas = () =>{

    const group1 = useRef(null);
    const sphere1 = useRef(null);
    const cyl1 = useRef(null);

    const box1 = useRef(null);

    useFrame(()=>{
       group1.current.rotation.y += 0.01; 
       box1.current.rotation.x += 0.01; 
       cyl1.current.rotation.z += -0.01;     
    })

    return(
        <>
        <directionalLight color={"gray"} position={[0,10,0]}/>
        <directionalLight color={"darkorange"} position={[0,-10,0]}/>
        <group ref={group1}>
           <mesh ref={box1} position={[1,1,0]} rotation={[1,1,0]}>
            <boxGeometry/>
            <meshStandardMaterial metalness={3}/>
        </mesh>

        <mesh ref={sphere1} position={[0,1,1]}>
            <sphereGeometry  args={[.6,36,36]}/>
            <meshStandardMaterial metalness={3}/>
        </mesh>

        <mesh ref={cyl1} position={[-1,1,0]} rotation={[-1,1,0]}>
            <cylinderGeometry args={[.5,.5,1]}/>
            <meshStandardMaterial metalness={3} />
        </mesh> 

        </group>
        
        </>
    )
}