import GameCanvas from "../../game_setup/canvas/GameCanvas";
import { TextCreator } from "../../textCreator/TextCreator";
import "./Game.scss";
//import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react";

function Game(props: any) {

  //! game logic
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startGame = () => {
    setIsGameStarted(true);
  };

  const exitGame = () => {
    setIsGameStarted(false);
  };

  //!display enter logic
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();

      if (
        rect.bottom >= window.innerHeight / 2 &&
        rect.top <= window.innerHeight / 2
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  //! scroll lock logic
  const [isScrollLocked, setScrollLocked] = useState(true); // Set to true to lock scroll initially

    const toggleScrollLock = () => {
        setScrollLocked(prevState => !prevState);
    };

  return (
    <div
      id="game"
      ref={elementRef}
      className={`page ${isVisible ? "visible-comp" : "invisible-comp"}`}
    >
      <h1>
        <TextCreator text="L ets Play a Game" speed={100} />
      </h1>
      <details>
        <summary>click here for running tips</summary>
        <p>
          For better runtime in Chrome, enable Hardware Acceleration under
          Settings&gt;System
        </p>
      </details>
      <br />
      {!isGameStarted ? (
        <button className="btn game-btn" onClick={startGame}>
          Play Game
        </button>
      ) : (
        // Render the GameCanvas component here
        <div>
          <GameCanvas isOn={isScrollLocked} />
          <button className="btn exit" onClick={exitGame}>
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
