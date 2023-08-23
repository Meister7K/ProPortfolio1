import { useState, useEffect } from "react";
import "./Menu.scss";

export const Menu = () => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;

    if (start) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [start]);

  return (
    <div className="game-menu">
      <h2>Menu</h2>
      <button onClick={() => setStart(true)} className="btn sgb">
        Start
      </button>
      <button className="btn controls">Controls</button>
      <span>Count: {count}</span>
    </div>
  );
};