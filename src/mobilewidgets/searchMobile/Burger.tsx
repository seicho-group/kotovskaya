import "./Burger.css"
import { Link } from "react-router-dom"
import vk from "./../../assets/vk 3.svg"
import wa from "./../../assets/wa.svg"
import tg from "./../../assets/tg.svg"
export function Burger(props: any) {
    return( 
    <div onClick={(e)=>{e.stopPropagation(); props.setBurgerClicked(false)}} className="burger__forclick">
        <div className="burger" onClick={e => e.stopPropagation()}>
            <div className="burger__items">
                <Link to={"/delivery"}>
                    <div onClick={()=>(props.setBurgerClicked(false))} className="burger__item"><p>доставка</p></div>
                </Link>
                <Link to={"/contacts"}>
                    <div onClick={()=>(props.setBurgerClicked(false))}className="burger__item"><p>контакты</p></div>
                </Link>
                </div>
            <div className="burger__item">
                <p>Мы в соцсетях</p>
                <div className="smblock">
                    <img src={vk} alt="" />
                    <img src={wa} alt="" />
                    <img src={tg} alt="" />
                    </div>
                    </div>
                
        </div>
    </div> )
}