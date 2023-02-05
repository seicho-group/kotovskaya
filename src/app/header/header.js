import './header.css';
import {Search} from "./search/search";
import gif from './../../assets/Group 1.svg'
import logo from './../../assets/Group 4.svg'
import cart from './../../assets/cart.svg'
import {Navi} from "./navi/navi";
import { Link } from 'react-router-dom'

export function Header() {
    return(<div className="header_wrap">
        <div className='header'>
            <Link to="/">
            <img src={logo} alt="" className="logo"/>
            </Link>
            <div className="nav">
                <Search />
                <Link to="/auth">
                <img src={gif} alt=""/>
                </Link>
                <img src={cart} alt=""/>
            </div>

        </div>
           <Navi />

        </div>
    )
}