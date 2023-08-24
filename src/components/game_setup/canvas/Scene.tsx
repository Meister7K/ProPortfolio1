import { Box, Grid } from "@react-three/drei";
import * as Three from 'three'
import { Physics, RigidBody, vec3 } from "@react-three/rapier";
import { Ground } from "../objects/Ground";
import { Pole } from "../objects/Pole";
import { Platform } from "../objects/Platform";
import { PlayerController } from "../player/PlayerController";
import { Test } from "./Test";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";




export const Scene = ({setIsGameStarted, isGameStarted,...props}:any) => {
  



  return(
    <>
    {/* <Grid infiniteGrid sectionColor={"red"}/>
    <Grid infiniteGrid sectionColor={'black'} rotation={[Math.PI/2,0,0]}/>
    <Grid infiniteGrid sectionColor={'white'} rotation={[0,0,Math.PI/2]}/> */}
    <Ground/>
    
    <Pole/>
    <Platform/>
    <PlayerController setIsGameStarted={setIsGameStarted} isGameStarted={isGameStarted}/>
    <Test/>
    </>
  )
};