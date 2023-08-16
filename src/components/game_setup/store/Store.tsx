import { types } from "../enemies/Enemies";

export const GenerateGameLevel = ({numberOfLevels}:any)=>{
    const level: never[] = [];

    for (let i = 0; i< numberOfLevels; i++){
        const stage: any[]=[];
        const numberOfEnemies= 1 + i;
        for(let j = 0;j<numberOfEnemies; j++){
            let type=null;
            while(!type || stage.includes(type)){
                type= types[Math.floor(Math.random()* types.length)]
            }
            stage.push(type);
        }
        stage[Math.floor(Math.random()*stage.length)].finish = true;
    }
    return level;
}

// export const useGameStore = create((set)=>({
//     stage:null,
//     currentStage:0,
//     currentEnemies: null,
//     mode:"easy",
//     startGame: ()=>{
//         const stage = GenerateGameLevel({numberOfLevels: 5})
//         const currentEnemies = stage[0].find((enemy) => enemy.type)
//     }
// })) 