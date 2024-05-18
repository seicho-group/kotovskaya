import "./ordered.css"

import { useOrderIdStore } from "src/packages/desktop/pages/cart-page/lib/use-order-id-store"

export function Ordered() {
  const { orderId, setOrderId } = useOrderIdStore()
  return (
    <div>
      Заказ номер {orderId} создан
      <br /> Спасибо за заказ!
    </div>
  )
}
