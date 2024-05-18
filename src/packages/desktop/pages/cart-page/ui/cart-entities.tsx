import { useCartStore } from "src/entities/cart/model/cart-store"
import { CartItem } from "src/packages/desktop/pages/cart-page/ui/cart-item/cart-item"

export function CartEntities() {
  const { cart } = useCartStore()
  return (
    <div className="fullcart__wrapper__list">
      <div className="fullcart__header">Ваша корзина</div>
      {Object.entries(cart).map(([key, value]) => (
        <CartItem product={value} key={key} />
      ))}
    </div>
  )
}