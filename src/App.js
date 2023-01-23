import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const INITIAL_TIMER = 10;
  const [count, setCounter] = useState(INITIAL_TIMER);
  const [id, setIntervalId] = useState(null);
  const delay = 1000;

  useEffect(() => {
    if (count === 0) {
      console.log("count", count, id);
      clearInterval(id);
    }
    console.log(count, id);
  }, [count]);

  const decrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const handleCountDown = () => {
    if (count === INITIAL_TIMER || count === 0) {
      count === 0 && setCounter(INITIAL_TIMER);
      setIntervalId(setInterval(decrement, delay));
    }
  };

  return (
    <div className="App">
      <button onClick={handleCountDown}>Start ConutDown</button>
      <div>{count < 1 ? "Hello React" : count}</div>
    </div>
  );
}
