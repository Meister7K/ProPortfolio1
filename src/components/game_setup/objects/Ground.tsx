
import { RigidBody,  CuboidCollider } from "@react-three/rapier"
import { groundTexture } from "../../../assets/images/textures/textures"


export const Ground = (props:any)=>{

    

   return(
    <group>
        <RigidBody
        {...props}
          colliders={false}
          type="fixed"
          name='floor'
        >
          <mesh receiveShadow position={[0,-0.1,0]} rotation-x={-Math.PI/2}>
            <planeGeometry args={[100,100]}/>
            <meshStandardMaterial map={groundTexture} map-repeat={[240,240]} color="red"/>
          </mesh>
          {/* <CuboidCollider args={[1000,2,1000]} position={[0,-2,0]}/> */}
        </RigidBody>
      </group>
   ) 
}