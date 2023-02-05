import "./main.css"
import {Slider} from "./slider/slider";
import {New} from "./new/new"
export function Main() {
    return(
        <div className="main">
            <Slider />
            <New />
        </div>
    )
}