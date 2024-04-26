import "./header-mobile.css"
import burger from "src/shared/assets/burgermobile.svg"
import logo from "src/shared/assets/mobilelogo.svg"
import lupa from "src/shared/assets/lupamobile.svg"
import cart from "src/shared/assets/cartmobile.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import closepic from "src/shared/assets/closebrown.svg"
import { BurgerMobile } from "../../search-mobile/ui/burger/burger-mobile"
import { SearchMobile } from "../../search-mobile/ui/search-mobile"
import { create } from "zustand"

type TSearchIsClicked = {
  searchIsClicked: boolean
  setSearchIsOpened: () => void
  setSearchIsClosed: () => void
}

export const useSearchIsClicked = create<TSearchIsClicked>((set) => ({
  searchIsClicked: false,
  setSearchIsOpened: () => set(() => ({ searchIsClicked: true })),
  setSearchIsClosed: () => set(() => ({ searchIsClicked: false })),
}))

export function HeaderMobile() {
  const { searchIsClicked, setSearchIsOpened, setSearchIsClosed } =
    useSearchIsClicked()
  const [searchClicked, setSearchClicked] = useState(false)
  const [burgerClicked, setBurgerClicked] = useState(false)
  return (
    <>
      <div className="header__mobile">
        <div
          onClick={() => {
            if (burgerClicked) {
              setBurgerClicked(false)
              document.body.style.overflow = "auto"
            } else {
              setBurgerClicked(true)
              document.body.style.overflow = "hidden"
            }
          }}
          className="header__mobile__burgericon"
        >
          <img src={burger} alt="" />
        </div>
        <Link to={"/"}>
          <div className="mobilelogo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="header__mobile__leftpanel">
          <div
            className="alignitemscenter"
            onClick={() =>
              searchIsClicked == false
                ? setSearchIsOpened()
                : setSearchIsClosed()
            }
          >
            {searchIsClicked ? (
              <img className="searchpic" src={closepic} alt="" />
            ) : (
              <img className="searchpic" src={lupa} alt="" />
            )}
          </div>
          <Link to={"/cartmobile"}>
            <div>
              <img src={cart} alt="" />
            </div>
          </Link>
        </div>
      </div>
      {burgerClicked ? (
        <BurgerMobile setBurgerClicked={setBurgerClicked} />
      ) : (
        ""
      )}
      {searchIsClicked ? <SearchMobile /> : ""}
    </>
  )
}
