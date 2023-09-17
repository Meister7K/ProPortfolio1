import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";



export const HomeCanvas = () =>{

    const group1 = useRef(null);
    const sphere1 = useRef(null);
    const cyl1 = useRef(null);

    const box1 = useRef(null);

    const manyBalls = ()=>{
        const balls = [];
        for(let i=0;i<1000;i++){
            // let x=Math.ceil(Math.random() *3) * (Math.round(Math.random()) ? 1 : -1);
            // let y =Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1)
            // let z =Math.ceil(Math.random() * 3) * (Math.round(Math.random()) ? 1 : -1)
            let x= Math.cos(i)
            let y= Math.tan(i)
            let z= Math.sin(i)
            balls[i]=[x,y,z]
        }
        return balls;
    }

    const balls = manyBalls().map((pos,i)=>(<mesh position={pos} ref={sphere1} key={i}>
        <sphereGeometry args={[.2,30,30]}/>
        <meshStandardMaterial metalness={3} />
    </mesh>))

    const box = (pos: number | number[] | THREE.Vector3 | readonly [x: number, y: number, z: number] | undefined) =>(<mesh ref={box1} position={pos} rotation={[1,1,0]}>
            <boxGeometry/>
            <meshStandardMaterial metalness={3}/>
        </mesh>)

    const cyl=(pos: number | number[] | THREE.Vector3 | readonly [x: number, y: number, z: number] | undefined)=>(
         <mesh ref={cyl1} position={pos} rotation={[-1,1,0]}>
            <cylinderGeometry args={[.5,.5,1]}/>
            <meshStandardMaterial metalness={3} />
        </mesh> 
    )

    useFrame(()=>{
    //    group1.current.rotation.x += 0.001; 
       group1.current.rotation.y += 0.001;
    //    box1.current.rotation.x += 0.01; 
    //    cyl1.current.rotation.z += -0.01; 
      
    })

    return(
        <>
    {/* Lights */}
        <directionalLight color={"lightgray"} position={[0,10,0]}/>
        <directionalLight color={"darkorange"} position={[0,-10,0]}/>
    {/* Objects */}
        <group ref={group1}>
            {balls}
            {/* {cyl([0,0,-1])} */}
            {/* {box([0,0,-2])} */}
  
        </group>
         
        </>
    )
}