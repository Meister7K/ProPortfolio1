import { useState, useEffect } from "react";
import "./Menu.scss";
import {gameStates, useGameStore } from "../store/Store";

export const Menu = ({props}:any) => {
  let count = props;

  // const {startGame, gameState}= useGameStore((state)=>{
  //   startGame: state.startGame,
  //   gameState: state.gameState,
  // });

  return (
    <div className='game-menu'
    // {`game-menu ${gameState!==gameStates.MENU ?'hidden':''}`}
    >
      <h2>Controls</h2>
      <ul>
        <li>Forward: W/UpArrow</li>
        <li>Backward: W/BackArrow</li>
        <li>Left: A/LeftArrow</li>
        <li>Right: D/RightArrow</li>
        <li>Jump: SpaceBar</li>
        </ul>
        {/* <button className="btn" onClick={()=>startGame()}>Start</button>
        <button className="btn">Scores</button> */}
      <span>Time: {String(count)}s</span>
    </div>
  );
};