import { RigidBody } from "@react-three/rapier"
import { logTexture } from "../../../assets/images/textures/textures"


export const Pole = (props:any)=>{

   return(
    <group>
    <RigidBody
    {...props}
        rotation={[0,0,Math.PI/2]}
      type="kinematicPosition"
      position={[-5,2,0]}
    >
      <mesh receiveShadow  >
        <cylinderGeometry args={[1,1,10]}/>
        <meshStandardMaterial map={logTexture} map-repeat={[240,240]} color="lightgray"/>
        
      </mesh>
      
    </RigidBody>
  </group>
   ) 
}