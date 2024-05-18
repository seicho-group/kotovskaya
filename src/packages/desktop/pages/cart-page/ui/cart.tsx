import "./cart.css"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { Link } from "react-router-dom"
import { Button } from "src/shared/ui/button/button"
import { CartPersonalInfo } from "src/packages/desktop/pages/cart-page/ui/cart-personal-info"
import { CartEntities } from "src/packages/desktop/pages/cart-page/ui/cart-entities"
import { CartOrderDetails } from "src/packages/desktop/pages/cart-page/ui/cart-order-details"

export function Cart() {
  const { cart } = useCartStore()

  if (Object.keys(cart).length == 0) {
    return (
      <div className="fullcart">
        <div className="cart__empty">
          В вашей корзине пока пусто
          <Link to="/">
            <Button width={"auto"} style={{ padding: "0 10px" }}>
              Вернуться в каталог
            </Button>
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className="fullcart">
      <div className="fullcart__wrapper">
        <div className="fullcart__wrapper1">
          <CartEntities />
          <CartPersonalInfo />
        </div>
        <div className="fullcart__wrapper__info">
          <CartOrderDetails />
        </div>
      </div>
    </div>
  )
}
