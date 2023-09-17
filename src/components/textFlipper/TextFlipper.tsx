import { useState, useEffect } from "react";

export const TextFlipper = ({ textArr }: { textArr: string[] }) =>{

    const [currtext,setCurrtext]= useState(0);
    
    const textFlip = () =>{
        setCurrtext((prevText)=>(prevText+1) % textArr.length);
    };

    useEffect(()=>{
        const intervalID = setInterval(textFlip,2000);
        return ()=>{
            clearInterval(intervalID)
        }
    },[]);

    return(
        <>
            {/* {textArr.map((text:string,index:number)=>(<h3 
            key={index} className="secondary-title">{text}</h3>))} */}
            {textArr[currtext]}
            
        
        </>
    )
}