import { useMemo } from "react"
import { useFormContext } from "react-hook-form"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { OrderForm } from "src/packages/desktop/features/order/model/order-form"
import { DeliveryWay } from "src/shared/types/productDTO"

export const useDeliveryPrice = () => {
  const { cart } = useCartStore()

  const { watch } = useFormContext<OrderForm>()
  const deliveryWay = watch("deliveryWay")

  const totalPrice = Object.keys(cart).reduce((previous, key) => {
    return (
      previous + ((cart[key]?.price || 0) * (cart[key]?.accumulator || 0)) / 100
    )
  }, 0)

  const deliveryPriceInfo = useMemo(() => {
    if (deliveryWay === DeliveryWay.Self) {
      return "самовывоз"
    }
    if (deliveryWay === DeliveryWay.Courier) {
      return "0-250₽"
    }
    if (deliveryWay === DeliveryWay.Mail) {
      return "индивидуально"
    }
  }, [deliveryWay])

  return { deliveryPriceInfo, totalPrice }
}
