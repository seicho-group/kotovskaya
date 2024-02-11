import './header.css'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import cart2 from "../assets/cart2.png"
import { Link } from 'react-router-dom'
import searchpic from "./../assets/lupa.svg"
import { useState } from 'react'
import { Search } from '../widgets/search/search'
export function Header() {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="underHeader">
      <div className="wrapper header">
        <div></div>
        <Link className="center" to="/">
          <img className="logo" src={logo} alt="logotip" />
        </Link>
        <div className="left_panel">
          <div className="left_panel_wrapper">
            
            <div onClick={()=>{setIsClicked(true)}}>
              <img className="searchpic" src={searchpic} alt="" />
            </div>
              <Link to="/cart">
                <img className="cart2" src={cart} alt="корзина" />
              </Link>
            
          </div>
        </div>
      </div>
      {isClicked ?
      (<Search/>)
      :null}
    </div>
  )
}
