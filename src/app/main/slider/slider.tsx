import "./slider.css";
import {useState} from "react";
import photo0 from "assets/photo0.jpeg";
import photo1 from "assets/photo1.jpeg";
import photo2 from "assets/photo2.jpeg";
import photo4 from "assets/photo4.jpeg";

export function Slider() {
    const photos = [photo0, photo1, photo2, photo4]

    const[ind, setInd] = useState(0)
    const Increment = () => {
        setInd(prevState => prevState+1);
    }
    const Decrement = () => {
        setInd(prevState => prevState-1)
    }

    return(<div className="fullscreen">
        <button className="arrows" onClick={Decrement}>
            -
        </button>
        <div className="sliderarea">

            <img className="slides" src={photos[ind]} alt=""/>
            {photos.map(i => <div className="circle"></div>)}
        </div>
            <button className="arrows" onClick={Increment}>+</button>
        </div>
    )
}