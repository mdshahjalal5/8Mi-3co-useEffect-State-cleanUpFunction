import React, { useEffect, useState } from 'react';

const Cleanup = () => {
    const [time, setTime] = useState(10);
   /*  setInterval(()=>{
        setTime((prvState)=>{
            console.log(prvState);
            return prvState+1;
        })
    },1000) */
   useEffect(()=>{
     const interval = setInterval(()=>{
        setTime((current)=>current + 1)
    },1000);
    return () =>{
        clearInterval(interval);
    }
   },[time])
   console.log(time)
    return (
        <div>
            <h2>{time} </h2>
        </div>
    );
};

export default Cleanup;