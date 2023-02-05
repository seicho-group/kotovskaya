import './navi.css'
import {Burger} from "../burger/burger";
import {useState} from "react";
import {Link} from "react-router-dom";

export function Navi() {
    const [status, setStatus] = useState(false)
    return(
        <div className="Navi">
            <button className="menu" onMouseOver={() => setStatus(true)} onMouseOut={() => setStatus(false)}>
                КАТАЛОГ
                <Burger status={status} />
            </button>
            <div className="navi__element">
                Новинки
            </div>
            <div className="navi__element">
                Популярное
            </div>
            <div className="navi__element">
                Распродажа
            </div>
            <div className="navi__element">
                Доставка
            </div>
            <Link to="/contacts">
            <div className="navi__element">
                Контакты
            </div></Link>
        </div>
    )
}