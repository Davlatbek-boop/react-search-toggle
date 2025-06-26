import React, { useEffect } from "react";

const StopWatch = () => {
    useEffect(()=>{
        let interval = setInterval(() => {
            console.log('interval');
        }, 1000);
        return ()=>{
            clearInterval(interval)
        }
    }, [])
  return (
    <div>
      <h1>StopWatch</h1>
    </div>
  );
};

export default StopWatch;
