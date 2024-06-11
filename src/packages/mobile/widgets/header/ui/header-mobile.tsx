import "./header-mobile.css"
import burger from "src/shared/assets/burgermobile.svg"
import logo from "src/shared/assets/mobilelogo.svg"
import lupa from "src/shared/assets/lupamobile.svg"
import cart from "src/shared/assets/cartmobile.svg"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import closepic from "src/shared/assets/closebrown.svg"
import { BurgerMobile } from "src/packages/mobile/widgets/burger/burger-mobile"
import { SearchMobile } from "../../search-mobile/ui/search-mobile"
import { create } from "zustand"
import {
  Menu,
  Search,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  X,
} from "lucide-react"
import { Searchbar } from "src/packages/desktop/widgets/searchbar/ui/searchbar"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { Notification } from "src/shared/ui/notification/notification"

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
  const [burgerClicked, setBurgerClicked] = useState(false)
  const navigate = useNavigate()

  const { cart } = useCartStore()
  const totalQuantity = Object.values(cart).reduce(
    (acc, item) => acc + item.accumulator,
    0,
  )
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
          {burgerClicked ? (
            <X color={"#c1a88a"} width={24} height={24} />
          ) : (
            <Menu color={"#c1a88a"} width={24} height={24} />
          )}
        </div>
        <Link to={"/"}>
          <div className="mobilelogo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="header__mobile__leftpanel">
          <div
            className="alignitemscenter"
            onClick={() => {
              if (!searchIsClicked) {
                document.body.style.overflow = "hidden"
              }
              !searchIsClicked ? setSearchIsOpened() : setSearchIsClosed()
            }}
          >
            {searchIsClicked ? (
              <X color={"#c1a88a"} width={24} height={24} />
            ) : (
              <Search color={"#c1a88a"} width={24} height={24} />
            )}
          </div>
          <div style={{ position: "relative" }}>
            <ShoppingBasket
              height={24}
              width={24}
              color={"#c1a88a"}
              onClick={() => navigate("/cart")}
            />
            <Notification char={totalQuantity.toString()} />
          </div>
        </div>
      </div>
      {burgerClicked ? (
        <BurgerMobile setBurgerClicked={setBurgerClicked} />
      ) : (
        ""
      )}
      {searchIsClicked ? (
        <Searchbar
          setIsClicked={() => {
            document.body.style.overflow = "auto"
            setSearchIsClosed()
          }}
        />
      ) : (
        ""
      )}
      <div className="header-line">Добро пожаловать на наш новый сайт!</div>
    </>
  )
}
