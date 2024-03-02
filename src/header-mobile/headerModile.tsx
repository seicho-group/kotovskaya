import "./headerMobile.css";
import burger from "./../assets/burgermobile.svg"
import logo from "./../assets/mobilelogo.svg"
import lupa from "./../assets/lupamobile.svg"
import cart from "./../assets/cartmobile.svg"
import { useState } from "react";
import { SearchMobile } from "../mobilewidgets/searchMobile/SearchMobile";
import { Burger } from "../mobilewidgets/searchMobile/Burger";
import { Link } from "react-router-dom";

export function HeaderMobile() {
    const [searchClicked, setSearchClicked] = useState(false)
    const [burgerClicked, setBurgerClicked] = useState(false)
    return( <>
        <div className="header__mobile">
            <div onClick={()=>(burgerClicked ? setBurgerClicked(false): setBurgerClicked(true))} className="header__mobile__burgericon">
                <img src={burger} alt="" />
            </div>
            <Link to={"/"}>
            <div className="mobilelogo"><img src={logo} alt="" /></div>
            </Link>
            <div className="header__mobile__leftpanel">
     
                <div onClick={()=>(searchClicked == false? setSearchClicked(true) : setSearchClicked(false))}><img src={lupa} alt="" /></div>
            
                <div><img src={cart} alt="" /></div>
            </div>
        </div>
        {burgerClicked ? <Burger setBurgerClicked={setBurgerClicked}/>: ""}
        {searchClicked ? (<SearchMobile />) : "" }
        </>
    )
}