import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { Froggy } from "../froggy/Froggy";
import { useKeyboardControls } from "@react-three/drei";
import { Controls } from "../canvas/GameCanvas";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const _JUMP = 0.9;
const _MOVEMENT_SPEED = 0.1;
const _MAX_VEL = 3;

export const PlayerController = () => {
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);

  const bodyRef = useRef(null);
  const isOnFloor = useRef(true);

  useFrame(() => {
    const playerDex = { x: 0, y: 0, z: 0 };
    if (jumpPressed && isOnFloor.current) {
      playerDex.y += _JUMP;
      isOnFloor.current = false;
    }

    const linearVelocity = bodyRef.current.linvel();
    let changeRotationX = false;

    if (forwardPressed && linearVelocity.z > -_MAX_VEL) {
      playerDex.z -= _MOVEMENT_SPEED;
      changeRotationX = true;
    }
    if (backPressed && linearVelocity.z < _MAX_VEL) {
      playerDex.z += _MOVEMENT_SPEED;
      changeRotationX = true;
    }
    if (leftPressed && linearVelocity.x > -_MAX_VEL) {
      playerDex.x -= _MOVEMENT_SPEED;
      changeRotationX = true;
    }
    if (rightPressed && linearVelocity.x < _MAX_VEL) {
      playerDex.x += _MOVEMENT_SPEED;
      changeRotationX = true;
    }

    bodyRef.current.applyImpulse(playerDex, true);
    if (changeRotationX) {
      const playerAngle = Math.atan2(linearVelocity.x, linearVelocity.z);
      player.current.rotation.y = playerAngle;
    }
  });

  const player = useRef(null);
  return (
    <group>
      <RigidBody
        ref={bodyRef}
        colliders={false}
        scale={[0.5, 0.5, 0.5]}
        enabledRotations={[false, false, false]}
        onCollisionEnter={() => {
          isOnFloor.current = true;
        }}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
        <group ref={player}>
          <Froggy />
        </group>
      </RigidBody>
    </group>
  );
};
