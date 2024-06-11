import { useEffect } from "react"
import "./ordered.css"

import { useOrderIdStore } from "src/pages/cart-page/lib/use-order-id-store"
import { useNavigate } from "react-router-dom"

export function Ordered() {
  const { orderId, setOrderId } = useOrderIdStore()

  const navigate = useNavigate()
  useEffect(() => {
    if (!orderId) {
      navigate("/")
    }
  }, [orderId])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "calc(100vh - 200px)",
        alignItems: "center",
      }}
    >
      Заказ номер {orderId} создан
      <br /> Спасибо за заказ!
    </div>
  )
}
