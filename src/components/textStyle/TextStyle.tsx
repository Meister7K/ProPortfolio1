import "./TextStyle.scss"
import { useRef, useEffect} from "react";

function TextStyle() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*+=-<>?/";
    const titleRef: any = useRef();
    
    const textFlip = () => {
      let loops: number = -1;
      const textInterval: any = setInterval(() => {
        if (titleRef.current) {
          loops = loops + 1 / 3;
          if (loops >= titleRef.current.innerText.length) {
            clearInterval(textInterval);
            return;
          }
  
          titleRef.current.innerText = titleRef.current.dataset.value
            .split("")
            .map((char: any, index: number) =>
              index < loops ? char : chars[Math.floor(Math.random() * chars.length)]
            )
            .join("");
        }
      }, 30);
    };
  
    useEffect(() => {
      textFlip();
    }, []);
    
  
   
  
    return (
      <div className="title-container">
        <h1
          ref={titleRef}
          className="main-title"
          onMouseOver={textFlip}
          data-value="KARL FINKEL"
        >
          KARL FINKEL
        </h1>  
      </div>
    );
  }
  
  export default TextStyle;