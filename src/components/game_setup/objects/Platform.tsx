import { RigidBody, CylinderCollider, MeshCollider } from "@react-three/rapier"
import { glassTexture } from "../../../assets/images/textures/textures"


export const Platform = (props:any)=>{

    

   return(
    <group>
        <RigidBody
        {...props}
          colliders={false}
          type="fixed"
          position={[0,1,0]}
        >
          <MeshCollider type='trimesh'>
          <mesh receiveShadow  >
            <cylinderGeometry args={[10,10,2]} />
            <meshStandardMaterial map={glassTexture} map-repeat={[240,240]} color="gray"/>
            <CylinderCollider args={[1,10]}/>
          </mesh>
          </MeshCollider>
        </RigidBody>
      </group>
   ) 
}