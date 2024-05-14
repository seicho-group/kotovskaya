import "./ordered.css"
import { useOrderIdStore } from "../cart-page/ui/cart"

export function Ordered() {
  const { orderId, setOrderId } = useOrderIdStore()
  return (
    <div>
      Заказ номер {orderId} создан
      <br /> Спасибо за заказ!
    </div>
  )
}
