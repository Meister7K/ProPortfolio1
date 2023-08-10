import {useState, useEffect} from "react"

import "./Clock.scss"


function Clock(){

    const [currentTime, setCurrentTime] = useState('');

    const compose = (...fns) =>(arg)=> fns.reduce((composed, f)=> f(composed),arg)

    const oneSecond=()=>1000;
    const getCurrentTime =()=> new Date();
    const clear = () => console.clear();
    const log = message => console.log(message);
    const serializeClockTime = date =>({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });
    const civillianHours = clockTime =>({
        ...clockTime,
        hours:(clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
    });
    const appendAMPM = clockTime =>({
        ...clockTime,
        ampm: (clockTime.hours >= 12)? "PM":"AM"
    })

    const display = target => time=> target(time);

    const formatClock = format =>time=> format.replace("hh", time.hours).replace("mm", time.minutes).replace("ss", time.seconds).replace("tt", time.ampm);

    const prependZero = key=>clockTime=>({
        ...clockTime,
        [key]: (clockTime[key]< 10)? "0"+ clockTime[key]: clockTime[key]
    });

    const convertToCivilianTime = clockTime => compose( 
        appendAMPM,
        civillianHours
    )(clockTime);

    const doubleDigits = civillianTime => compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civillianTime);

    const startTicking =()=>
    setInterval(compose(
        clear,
        getCurrentTime,
        serializeClockTime,
        convertToCivilianTime,
        doubleDigits,
        formatClock("hh:mm:ss tt"),
        display((time) => setCurrentTime(time))
        
    ), oneSecond())

  

    useEffect(() => {
        startTicking();
        return () => clearInterval(startTicking);
      }, []);


    return(
    <div className="mask">
        <h3 className="clock port">'Time is all we have {currentTime}'</h3>
    </div>
    );
}

export default Clock;