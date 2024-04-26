import "./slider-mobile.css";
import photo0 from "src/shared/assets/слайдермобилка.png";
import photo1 from "src/shared/assets/photo1.png";
import photo2 from "src/shared/assets/photo2.png";
import rightarrow from "src/shared/assets/rightarrow.svg";
import leftarrow from "src/shared/assets/leftarrow.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Circle } from "src/shared/ui/circle/circle";

export function SliderMobile() {
  const [current, setCurrent] = useState(0);
  const sliderGallery = [photo0, photo1, photo2];
  const circlesArray: any = sliderGallery.map((photo, index) => {
    if (current === index) {
      return <Circle status="active" />;
    } else {
      return <Circle status="notactive" />;
    }
  });
  if (circlesArray) {
    console.log(circlesArray.length);
  }
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
    <div className="slider__mobile">
      <img className="leftarrow" onClick={decrement} src={leftarrow} alt="" />
      <Link to={`/slider/${current}`}>
        <img
          className="slider_pic__mobile"
          src={sliderGallery[current]}
          alt=""
        />
      </Link>
      <div className="slider__circles">{circlesArray}</div>
      <img className="rightarrow" onClick={increment} src={rightarrow} alt="" />
    </div>
  );
}
