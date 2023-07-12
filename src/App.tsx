import { useRef, useEffect} from "react";
import "./App.scss";

function App() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*+=-<>?/";
  const titleRef: any = useRef();
  const textFlip = () => {
    let loops = -1;

    const textInterval = setInterval(() => {
      titleRef.current.innerText = titleRef.current.innerText
        .split("")
        .map((char: any, index: number) => {
          if (index < loops) {
            console.log(titleRef.current.dataset.value[index]);
            return titleRef.current.dataset.value[index];
          }

          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      if (loops >= titleRef.current.innerText.length) {
        clearInterval(textInterval);
      }

      loops += 1/3;
    }, 30);
  };

  useEffect(()=>{
    textFlip();
  },[])

  return (
    <>
      <h1
        ref={titleRef}
        className="title"
        onMouseOver={textFlip}
        data-value="KARL FINKEL"
      >
        KARL FINKEL
      </h1>
      <button className="playBtn btn">
        Play
      </button>
    </>
  );
}

export default App;
