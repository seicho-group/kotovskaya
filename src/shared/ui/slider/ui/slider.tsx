import "./slider.css";
import photo0 from "src/shared/assets/photo0.png";
import photo1 from "src/shared/assets/photo1.png";
import photo2 from "src/shared/assets/photo2.png";
import rightarrow from "src/shared/assets/rightarrow.svg";
import leftarrow from "src/shared/assets/leftarrow.svg";
import { useState } from "react";
import { Circle } from "../../circle/circle";

export function Slider() {
  const [current, setCurrent] = useState(0);
  const sliderGallery = [photo0, photo1, photo2];
  const circlesArray: any = sliderGallery.map((photo, index) => {
    if (current === index) {
      return <Circle status="active" />;
    } else {
      return <Circle status="notactive" />;
    }
  });

  function increment() {
    if (current === sliderGallery.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  function decrement() {
    if (current === 0) {
      setCurrent(sliderGallery.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  return (
    <div className="slider">
      <img className="leftarrow" onClick={decrement} src={leftarrow} alt="" />
      <img className="sliderPic" src={sliderGallery[current]} alt="" />
      <div className="slider__circles">{circlesArray}</div>
      <img className="rightarrow" onClick={increment} src={rightarrow} alt="" />
    </div>
  );
}
