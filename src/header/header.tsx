import "./header.css";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";
import searchpic from "./../assets/lupa.svg";
import closepic from "./../assets/Vector (2) 1.svg";
import { useState } from "react";
import { Search } from "../widgets/search/search";
export function Header() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="underHeader">
      <div className="wrapper header">
                <div></div>
        <Link className="center" to="/">
          <img className="logo" src={logo} alt="logotip" />
        </Link>
        <div className="left_panel">
          <div className="left_panel_wrapper">
            <div
              className="alignitemscenter"
              onClick={
                isClicked
                  ? () => {
                      setIsClicked(false);
                    }
                  : () => {
                      setIsClicked(true);
                    }
              }
            >
              {isClicked ? (
                <img className="searchpic" src={closepic} alt="" />
              ) : (
                <img className="searchpic" src={searchpic} alt="" />
              )}
            </div>
            <Link to="/cart">
              <img className="cart2" src={cart} alt="корзина" />
            </Link>
          </div>
        </div>
      </div>
      {isClicked ? <Search setIsClicked={setIsClicked} /> : null}
    </div>
  );
}