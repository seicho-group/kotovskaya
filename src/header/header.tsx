import './header.css'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <div className="underHeader">
      <div className="wrapper header">
        <div></div>
        <Link className="center" to="/">
          <img className="logo" src={logo} alt="logotip" />
        </Link>
        <div className="left_panel">
          <div className="left_panel_wrapper">
            <div className="left_panel_search">
              <input className="search" type="search" placeholder="поиск..." />
            </div>
            <div className="left_panel_cart">
              <Link to="/cart">
                <img className="cart" src={cart} alt="корзина" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
