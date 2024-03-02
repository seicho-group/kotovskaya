import "./Burger.css"
import { Link } from "react-router-dom"
export function Burger(props: any) {
    return( <div className="burger">
<div className="burger__items">
    <Link to={"/delivery"}>
            <div onClick={()=>(props.setBurgerClicked(false))} className="burger__item"><p>доставка</p></div>
            </Link>
            <Link to={"/contacts"}>
                <div onClick={()=>(props.setBurgerClicked(false))}className="burger__item"><p>контакты</p></div>
            </Link>
            </div>
            <div>Мы в соцсетях</div>
    </div> )
}