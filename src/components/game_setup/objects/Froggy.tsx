/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 ./public/models/Froggy.glb 
*/

import  { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export function Froggy(props: any) {
  const group = useRef();
  const { nodes, materials }:any = useGLTF(
    "./models/Froggy.glb"
  );
 
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="CharacterArmature"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Root} />
          </group>
          <group name="Frog" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Frog_1"
              geometry={nodes.Frog_1.geometry}
              material={materials.Frog_Secondary}
              skeleton={nodes.Frog_1.skeleton}
            />
            <skinnedMesh
              name="Frog_2"
              geometry={nodes.Frog_2.geometry}
              material={materials.Frog_Main}
              skeleton={nodes.Frog_2.skeleton}
            />
            <skinnedMesh
              name="Frog_3"
              geometry={nodes.Frog_3.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Frog_3.skeleton}
            />
            <skinnedMesh
              name="Frog_4"
              geometry={nodes.Frog_4.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Frog_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/Froggy.glb");
//export default Froggy;
