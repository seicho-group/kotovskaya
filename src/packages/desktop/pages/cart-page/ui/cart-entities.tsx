import { useCartStore } from "src/entities/cart/model/cart-store"
import { CartItem } from "src/packages/desktop/pages/cart-page/ui/cart-item/cart-item"
import { Text } from "src/shared/ui/text/text"

export function CartEntities() {
  const { cart } = useCartStore()
  return (
    <div className="fullcart__wrapper__list">
      <Text variant={"subtitle"}>Ваша корзина</Text>
      {Object.entries(cart).map(([key, value]) => (
        <CartItem product={value} key={key} />
      ))}
    </div>
  )
}
