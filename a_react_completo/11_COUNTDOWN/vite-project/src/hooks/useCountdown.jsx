import { useState } from "react";

const useCountdown = (date) =>{

    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    const countdown = ()=>{
        const countDate = new Date(date).getTime();

        const now = new Date().getTime();
    
        const interval = countDate-now;
    
    
        const MILLESECONDS_IN_SECOND = 1000;
        const MINUTE = MILLESECONDS_IN_SECOND*60;
        const HOUR = MINUTE*60;
        const DAY = HOUR*24;
    
        const dayNumber = Math.floor(interval/DAY);
        const hourNumber = Math.floor((interval%DAY)/HOUR);
        const minuteNumber = Math.floor((interval%HOUR)/MINUTE);
        const secondNumber = Math.floor((interval%MINUTE)/MILLESECONDS_IN_SECOND);
        
        
        setDay(dayNumber);
        setHour(hourNumber);
        setMinute(minuteNumber);
        setSecond(secondNumber);
    }
    
    setInterval(countdown, 1000)
    
    return [day, hour, minute, second]
}

export default useCountdown;