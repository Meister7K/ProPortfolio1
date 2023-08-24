import { create } from "zustand";

export const gameStates = {
    MENU: "MENU",
    GAME: "GAME",
    GAME_OVER: "GAME_OVER",
  };

  export const playAudio = (path, callback) => {
    const audio = new Audio(`./sounds/${path}.mp3`);
    if (callback) {
      audio.addEventListener("ended", callback);
    }
    audio.play();
  };

  export const useGameStore = create((set)=>({
    currentStage: 0,
    gameState: gameStates.MENU,
    startGame:()=>{
        set({currentStage: 1,gameState:gameStates.GAME})
    },
    nextStage:()=>{
        set((state)=>{
            const currentStage = state.currentStage +1;
            return {currentStage};
        })
    }
  }));