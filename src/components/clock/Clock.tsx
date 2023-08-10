import {useState, useEffect, SetStateAction} from "react"

import "./Clock.scss"


function Clock(){

    const [currentTime, setCurrentTime] = useState('');

    const compose = (...fns:any) =>(arg:any)=> fns.reduce((composed: any, f: (arg0: any) => any)=> f(composed),arg)

    const oneSecond=()=>1000;
    const getCurrentTime =()=> new Date();
    const clear = () => console.clear();
    //const log = message => console.log(message);
    const serializeClockTime = (date: { getHours: () => any; getMinutes: () => any; getSeconds: () => any; }) =>({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });
    const civillianHours = (clockTime: { hours: number; }) =>({
        ...clockTime,
        hours:(clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
    });
    const appendAMPM = (clockTime: { hours: number; }) =>({
        ...clockTime,
        ampm: (clockTime.hours >= 12)? "PM":"AM"
    })

    const display = (target: { (time: any): void; (arg0: any): any; }) => (time: any)=> target(time);

    const formatClock = (format: string) =>(time: { hours: any; minutes: any; seconds: any; ampm: any; })=> format.replace("hh", time.hours).replace("mm", time.minutes).replace("ss", time.seconds).replace("tt", time.ampm);

    const prependZero = (key: string)=>(clockTime: { [x: string]: any; })=>({
        ...clockTime,
        [key]: (clockTime[key]< 10)? "0"+ clockTime[key]: clockTime[key]
    });

    const convertToCivilianTime = (clockTime: any) => compose( 
        appendAMPM,
        civillianHours
    )(clockTime);

    const doubleDigits = (civillianTime: any) => compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civillianTime);

    // const startTicking =()=>
    // setInterval(compose(
    //     clear,
    //     getCurrentTime,
    //     serializeClockTime,
    //     convertToCivilianTime,
    //     doubleDigits,
    //     formatClock("hh:mm:ss tt"),
    //     display((time: SetStateAction<string>) => setCurrentTime(time))
        
    // ), oneSecond())

  

    useEffect(() => {
        const intervalId = setInterval(compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display((time: string) => setCurrentTime(time))
        ), oneSecond());

        return () => clearInterval(intervalId);
    }, []);


    return(
    <div className="mask">
        <h3 className="clock port">{currentTime}</h3>
    </div>
    );
}

export default Clock;