import { RigidBody, RapierRigidBody, MeshCollider } from "@react-three/rapier";
import { useRef, useEffect } from "react";


export const Test = () => {

  const ref = useRef<RapierRigidBody>(null);

  useEffect(() => {


    if(ref.current){
      ref.current.addTorque({x:0,y:10,z:0}, true)
    }
  },[])

    
  
    return (
      <RigidBody ref={ref} position={[0,3,0]}>
        <MeshCollider type="hull">

           <mesh>
            <sphereGeometry args={[1,10,10]} collider={false}/>
            
        </mesh>
        </MeshCollider>
       

      </RigidBody>
    );
    };