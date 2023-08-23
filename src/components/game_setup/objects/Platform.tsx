import { RigidBody, CylinderCollider } from "@react-three/rapier"
import { glassTexture } from "../../../assets/images/textures/textures"


export const Platform = (props:any)=>{

    

   return(
    <group>
        <RigidBody
        {...props}
          colliders={false}
          type="fixed"
        >
          <mesh receiveShadow position={[0,0,0]} >
            <cylinderGeometry args={[10,10,2]}/>
            <meshStandardMaterial map={glassTexture} map-repeat={[240,240]} color="black"/>
             <CylinderCollider args={[1,10]}/>
          </mesh>
          
        </RigidBody>
      </group>
   ) 
}