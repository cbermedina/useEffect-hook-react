import React, { useState, useEffect } from "react";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() =>{
        setProgress((prev) => prev + 1)
      },100);
      return interval;
  },[]);

  useEffect(() => {
    if(progress===100){
      setProgress(0);
    }
  },[progress]);
  return (
    <div
      style={{
        backgroundColor: "red",
        width: `${progress}%`,
        height: "20px",
      }}
    >
      Hello
    </div>
  );
};

export default ProgressBar;
