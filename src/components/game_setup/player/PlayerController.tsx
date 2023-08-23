import { CapsuleCollider, RigidBody} from "@react-three/rapier";
// import { gameStates, playAudio, useGameStore } from "../store";
import {useKeyboardControls } from "@react-three/drei";
import { Controls } from "../canvas/GameCanvas";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Player from "./Player";
import * as THREE from "three";

const JUMP_FORCE = 2;
const MOVEMENT_SPEED = 0.2;
const MAX_VEL = 5;

export const PlayerController = () => {

  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const rigidbody = useRef();
  const isOnFloor = useRef(true);

  useFrame((state, delta) => {
    const impulse = { x: 0, y: 0, z: 0 };
    if (jumpPressed && isOnFloor.current) {
      impulse.y += JUMP_FORCE;
      isOnFloor.current = false;
    }

    const linvel = rigidbody.current.linvel();
    let changeRotation = false;
    if (rightPressed && linvel.x < MAX_VEL) {
      impulse.x += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (leftPressed && linvel.x > -MAX_VEL) {
      impulse.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (backPressed && linvel.z < MAX_VEL) {
      impulse.z += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (forwardPressed && linvel.z > -MAX_VEL) {
      impulse.z -= MOVEMENT_SPEED;
      changeRotation = true;
    }

    rigidbody.current.applyImpulse(impulse, true);


    if (changeRotation) {
      const angle = Math.atan2(linvel.x, linvel.z);
      character.current.rotation.y = angle;
    }

    // CAMERA FOLLOW
    const characterWorldPosition = character.current.getWorldPosition(
      new THREE.Vector3()
    );

    const targetCameraPosition = new THREE.Vector3(
      characterWorldPosition.x ,
      characterWorldPosition.y + 4,
      characterWorldPosition.z +10,
    );

    // if (gameState === gameStates.GAME) {
    //   targetCameraPosition.y = 6;
    // }
    // if (gameState !== gameStates.GAME) {
    //   targetCameraPosition.y = 0;
    // }

    state.camera.position.lerp(targetCameraPosition, delta * 2);

    const targetLookAt = new THREE.Vector3(
      characterWorldPosition.x,
      characterWorldPosition.y,
      characterWorldPosition.z
    );

    const direction = new THREE.Vector3();
    state.camera.getWorldDirection(direction);

    const position = new THREE.Vector3();
    state.camera.getWorldPosition(position);

    const currentLookAt = position.clone().add(direction);
    const lerpedLookAt = new THREE.Vector3();

    lerpedLookAt.lerpVectors(currentLookAt, targetLookAt, delta *2);

    state.camera.lookAt(targetLookAt);
  });

  const character = useRef();


  return (
    <group>
      <RigidBody
      position={[0,0,8]} 
        ref={rigidbody}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        enabledRotations={[false, false, false]}
        onCollisionEnter={() => {
          isOnFloor.current = true;
        }}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
        <group ref={character}>
          <Player />
        </group>
      </RigidBody>
    </group>
  );
};


