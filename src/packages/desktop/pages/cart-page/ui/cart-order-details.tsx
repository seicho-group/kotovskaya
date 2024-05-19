import { useDeliveryPrice } from "src/packages/desktop/pages/cart-page/lib/use-delivery-price"
import { useCreateOrder } from "src/packages/desktop/pages/cart-page/lib/use-create-order"

export function CartOrderDetails() {
  const { deliveryPriceInfo, totalPrice } = useDeliveryPrice()
  // сохранение заказа
  const { createOrder, isPending } = useCreateOrder()

  return (
    <div className="toorder__wrapper">
      <div className="toorder">
        <p className="fz__22">Итого</p>
        <div className="toorder__element">
          <div>Товары</div>
          <div>{totalPrice + "₽"}</div>
        </div>
        <div className="toorder__element">
          <div>Доставка</div>
          <div>{deliveryPriceInfo}</div>
        </div>
        {/* <div className="toorder__element">
          <div>К оплате</div>
          <div>{totalPrice + "₽"}</div>
        </div> */}
        <div onClick={createOrder} className="order__button">
          {isPending ? "Заказ создается..." : "Оформить заказ"}
        </div>
      </div>
    </div>
  )
}
