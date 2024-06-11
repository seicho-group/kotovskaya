import "./header.css"
import logo from "src/shared/assets/logo.svg"
import cart from "src/shared/assets/cart.svg"
import { Link, useNavigate } from "react-router-dom"
import searchpic from "src/shared/assets/lupa.svg"
import closepic from "src/shared/assets/Vector (2) 1.svg"
import { useState } from "react"
import { Searchbar } from "../../searchbar/ui/searchbar"
import { Cross, Search, ShoppingBasket, X } from "lucide-react"

export function Header() {
  const [isOpened, setIsOpened] = useState(false)
  const navigate = useNavigate()
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
              {isOpened ? (
                <X cursor={"pointer"} color={"white"} width={30} height={30} />
              ) : (
                <Search
                  cursor={"pointer"}
                  color={"white"}
                  width={30}
                  height={30}
                />
              )}
            </div>
            <ShoppingBasket
              cursor={"pointer"}
              width={30}
              height={30}
              color={"white"}
              onClick={() => navigate("/cart")}
            />
          </div>
        </div>
      </div>
      {isOpened ? <Searchbar setIsClicked={setIsOpened} /> : null}
    </div>
  )
}
