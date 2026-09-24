import React, { useState, useRef, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef(0);
  const animationFrameRef = useRef(null);

  const updateTimer = () => {
    setTime(Date.now() - startTimeRef.current);
    animationFrameRef.current = requestAnimationFrame(updateTimer);
  };

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      startTimeRef.current = Date.now() - time;
      animationFrameRef.current = requestAnimationFrame(updateTimer);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    cancelAnimationFrame(animationFrameRef.current);
    setTime(0);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  const formatTime = (timeInMs) => {
    const minutes = Math.floor((timeInMs / 60000) % 60);
    const seconds = Math.floor((timeInMs / 1000) % 60);
    const milliseconds = Math.floor((timeInMs / 10) % 100);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch" >
      <h2>Stopwatch</h2>
      <div className="time-display" >
        {formatTime(time)}
      </div>
      <div className="controls" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handleStop} disabled={!isRunning} >Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
