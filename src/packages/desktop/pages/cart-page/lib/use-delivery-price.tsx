import { useCartStore } from "src/entities/cart/model/cart-store"

export const useDeliveryPrice = () => {
  const { cart } = useCartStore()

  const totalPrice = Object.keys(cart).reduce((previous, key) => {
    return (
      previous + ((cart[key]?.price || 0) * (cart[key]?.accumulator || 0)) / 100
    )
  }, 0)

  return { deliveryPrice: totalPrice >= 1500 ? 0 : 250, totalPrice }
}
