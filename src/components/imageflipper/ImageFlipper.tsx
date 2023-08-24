import { useState, useEffect } from "react";
import "./ImageFlipper.scss";
import Headshot from "../../assets/images/about/headshot.jpg";
import KF1 from "../../assets/images/about/Family.jpg";
import KF2 from "../../assets/images/about/KF2.jpg";
import KF3 from "../../assets/images/about/KF3.jpg";
import KF4 from "../../assets/images/about/KF4.jpg";
import KF5 from "../../assets/images/about/SPK.jpg";
import KF6 from "../../assets/images/about/KF6.jpg";
import KF7 from "../../assets/images/about/KF7.jpg";
import Wedd from "../../assets/images/about/Wedding.jpg";

const ImageFlipper = () => {
  const ImgArray = [Headshot, KF1, Wedd, KF2, KF3, KF4, KF5, KF6, KF7];
  const [currentImg, setCurrentImg] = useState(0);

  const imgFlip = () => {
    setCurrentImg((prevImg) => (prevImg + 1) % ImgArray.length);
  };

  useEffect(() => {
    const intervalID = setInterval(imgFlip, 5000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="image-flipper">
      <div className="image-container">
        {ImgArray.map((imageSrc, index) => (
          <img
            key={index}
            className={`image ${index === currentImg ? "visible" : ""}`}
            src={imageSrc}
            alt={`Image ${index}`}
            onClick={imgFlip}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageFlipper;
