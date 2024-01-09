import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isFinishedRunning, setIsFinishedRunning] = useState(false);
  const [background, setBackground] = useState('#6F00FF')
  const [buttonText, setButtonText] = useState('START')
  const [pulseText, setPulseText] = useState(false)
  const [seconds, setSeconds] = useState(105);



  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
        interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
    
      }, 1000);
    }
  if(seconds <= 0) {
    setIsFinishedRunning(true)
    setBackground('#DC143C')
    setPulseText(false);
    setButtonText('STOP')

  }
    return () => clearInterval(interval);
  }, [isRunning, seconds, isFinishedRunning, buttonText]);

  const handleStart = () => {
    setIsRunning(true);
    setPulseText(true);
    setIsFinishedRunning(true);
    setButtonText('PULSE')
    setBackground('#FF9CCE');
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsFinishedRunning(false);
    setBackground('#6F00FF');
    setPulseText(false)
    setButtonText('START')
    setSeconds(105);
  };

  const timerStyle = {
    backgroundColor: `${background}`,
    color: 'white',
    cursor: isRunning ? 'not-allowed' : 'pointer',
  };

  return (
    <div className="TimerContainer">
      <div className={`Timer ${pulseText ? 'PulseText' : ''}`} style={timerStyle} onClick={handleStart}>
       {buttonText}
      </div>
      {/* {`ResetButton ${pulseText ? 'PulseText' : ''}`}  */}
        <button className="ResetButton" onClick={handleReset}>
          Reset
        </button>
    </div>
  );
};

export default Timer;
