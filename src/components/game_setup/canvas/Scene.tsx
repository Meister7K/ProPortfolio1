
import { Ground } from "../objects/Ground";
import { Pole } from "../objects/Pole";
import { Platform } from "../objects/Platform";
import { PlayerController } from "../player/PlayerController";
import { Test } from "./Test";





export const Scene = ({setIsGameStarted, isGameStarted}:any) => {
  



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