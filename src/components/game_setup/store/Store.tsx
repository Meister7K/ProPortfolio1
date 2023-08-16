import { types } from "../enemies/Enemies";

export const GenerateGameLevel = ({numberOfLevels}:any)=>{
    const level: any[] = [];

    for (let i = 0; i< numberOfLevels; i++){
        const stage: any[]=[];
        const numberOfEnemies= 1 + 1;
        for(let j = 0;j<numberOfEnemies; j++){
            let type=null;
            while(!type || stage.includes(type)){
                type= types[Math.floor(Math.random()* types.length)]
            }
            stage.push(type);
        }
        //stage[Math.floor(Math.random()*stage.length)].defeated = true;
        level.push(stage);
    }
    return level;
}

export const useGameStore = create((set)=>({
    level:null,
    currentStage:0,
    currentEnemies: null,
    mode:"easy",
    startGame: ()=>{
        const stage = GenerateGameLevel({numberOfLevels: 5})
        const currentEnemies = stage[0].find((type) => type.enemy)
        set({level, currentStage:0, currentEnemies})
    },
    nextStage: ()=>{
        set((state)=>{
            const currentStage = state.currentStage + 1;
            const currentEnemies = state.leel[currentStage].find((type)=> type.enemy);
            return{currentStage, currentEnemies};
        })
    }
})) 