import "./header.css";
import logo from "src/shared/assets/logo.svg";
import cart from "src/shared/assets/cart.svg";
import { Link } from "react-router-dom";
import searchpic from "src/shared/assets/lupa.svg";
import closepic from "src/shared/assets/Vector (2) 1.svg";
import { useState } from "react";
import { Searchbar } from "../../searchbar/ui/searchbar";

export function Header() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="underHeader">
      <div className="wrapper header">
        <div id="placeholder" />
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
