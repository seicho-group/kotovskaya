import "./header.css";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";
import searchpic from "./../assets/lupa.svg";
import closepic from "./../assets/Vector (2) 1.svg";
import { useState } from "react";
import { Searchbar } from "../../searchbar/ui/searchbar";

export function Header() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="underHeader">
      <div className="wrapper header">
        <Link className="center" to="/">
          <img className="logo" src={logo} alt="logotip" />
        </Link>
        <div className="left_panel">
          <div className="left_panel_wrapper">
            <div
              className="alignitemscenter"
              onClick={() => setIsOpened(!isOpened)}
            >
              <img
                className="searchpic"
                src={isOpened ? closepic : searchpic}
                alt=""
              />
            </div>
            <Link to="/cart">
              <img className="cart2" src={cart} alt="корзина" />
            </Link>
          </div>
        </div>
      </div>
      {isOpened ? <Searchbar setIsClicked={setIsOpened} /> : null}
    </div>
  );
}
