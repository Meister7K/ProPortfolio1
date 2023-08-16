import { CapsuleCollider, RigidBody } from "@react-three/rapier"
import { Froggy } from "../froggy/Froggy"
import { useKeyboardControls} from "@react-three/drei"
import { Controls } from "../canvas/GameCanvas";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const _JUMP = 0.5;
const _MOVEMENT_SPEED = 0.1;
const _MAX_VEL = 3;

export const PlayerController =()=>{

    const jumpPressed = useKeyboardControls((state)=>state[Controls.jump]); 
    const forwardPressed = useKeyboardControls((state)=>state[Controls.forward]); 
    const leftPressed = useKeyboardControls((state)=>state[Controls.left]); 
    const rightPressed = useKeyboardControls((state)=>state[Controls.right]); 
    const backPressed = useKeyboardControls((state)=>state[Controls.back]); 

    const playerRef = useRef(null);
    const isOnFloor= useRef(true);

    useFrame(()=>{
        const playerDex = {x:0, y:0, z:0};
        if(jumpPressed && isOnFloor.current){
            playerDex.y += _JUMP
            isOnFloor.current = false;
        }
        if(forwardPressed){
            playerDex.z -= _MOVEMENT_SPEED
        }
        if(backPressed){
            playerDex.z += _MOVEMENT_SPEED
        }
        if(leftPressed){
            playerDex.x -= _MOVEMENT_SPEED
        }
        if(rightPressed){
            playerDex.x += _MOVEMENT_SPEED
        }

        playerRef.current.applyImpulse(playerDex, true)
    });

        const player = useRef(null);
    return(
        <group>
            <RigidBody ref={playerRef} colliders={false} scale={[0.5,0.5,0.5]} enabledRotations={[false,false,false]} onCollisionEnter={()=>{
                isOnFloor.current=true;
            }}>
            <CapsuleCollider args={[0.8,0.4]} position={[0,1.2,0]}/>
            <group ref={player}>
               <Froggy/> 
            </group>
            </RigidBody>
            </group>
    )
}