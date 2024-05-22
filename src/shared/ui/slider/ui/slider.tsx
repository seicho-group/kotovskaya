import "./slider.css"
import photo0 from "src/shared/assets/slider/Frame 116 (3).png"
import photo1 from "src/shared/assets/slider/Frame 50.png"
import rightarrow from "src/shared/assets/rightarrow.svg"
import leftarrow from "src/shared/assets/leftarrow.svg"
import { useContext, useState } from "react"
import { Circle } from "../../circle/circle"
import { IsMobileContext } from "src/app/app"
import slider0 from "./../../../assets/silder0.png"
import { Link } from "react-router-dom"

export function Slider() {
  const [current, setCurrent] = useState(0)

  const { isMobile } = useContext(IsMobileContext)

  const sliderGallery = [slider0]
  const circlesArray: any = sliderGallery.map((photo, index) => {
    if (current === index) {
      return <Circle status="active" key={index} />
    } else {
      return <Circle status="notactive" key={index} />
    }
  })

  function increment() {
    if (current === sliderGallery.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  function decrement() {
    if (current === 0) {
      setCurrent(sliderGallery.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  return (
    <div
      className="slider"
      style={{
        marginTop: isMobile ? "0" : "-50px",
      }}
    >
      {sliderGallery.length === 1 ? null : <div className="slider__circles">{<img className="leftarrow" onClick={decrement} src={leftarrow} alt="" />}</div>  }
      <Link to={"/categorypage/5986b77d-7eae-4889-b290-65a0e9bb5115"}>
        <img className="sliderPic" src={sliderGallery[current]} alt="" />
      </Link>
      {sliderGallery.length === 1 ? null : <div className="slider__circles">{circlesArray}</div>}
      {sliderGallery.length === 1 ? null : <div className="slider__circles">{<img className="rightarrow" onClick={increment} src={rightarrow} alt="" />}</div> }
      
      
    </div>
  )
}
