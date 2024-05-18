import "./cart.css"
import { CartItem } from "./cart-item/cart-item"
import { FormProvider, useForm, useFormContext } from "react-hook-form"
import { OrderForm } from "src/packages/desktop/features/order/model/order-form"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { Link } from "react-router-dom"
import { create } from "zustand"
import { Product, ProductOrderRequest } from "src/shared/types/productDTO"
import { validatePhoneNumber } from "src/packages/desktop/pages/cart-page/lib/cart-form-validators"
import { useCreateOrder } from "src/packages/desktop/pages/cart-page/lib/use-create-order"
import { useDeliveryPrice } from "src/packages/desktop/pages/cart-page/lib/use-delivery-price"

export const productsToProductOrderRequest = (
  array: Product[],
): ProductOrderRequest[] => {
  return array.map((product: Product) => {
    return {
      productId: product.id,
      quantity: product.accumulator,
    }
  })
}

type TOrderIdStore = {
  orderId: string
  setOrderId: (input: string) => void
}

export const useOrderIdStore = create<TOrderIdStore>((set) => ({
  orderId: "",
  setOrderId: (orderId: string) => set(() => ({ orderId: orderId })),
}))

export function Cart() {
  const { cart } = useCartStore()

  const { deliveryPrice, totalPrice } = useDeliveryPrice()

  // form data -> убрать по компонентам через форм контекст
  const { watch, register, setValue, formState } = useFormContext<OrderForm>()

  const deliveryWay = watch("deliveryWay")
  const formName = register("name", {
    required: true,
  })
  const formPhone = register("phone", {
    validate: validatePhoneNumber,
  })
  const formEMail = register("email", {
    validate: (text?: string) => text?.includes("@") && text.length > 5,
  })
  const formComment = register("comment")
  register("deliveryWay")

  // сохранение заказа
  const { createOrder, isPending } = useCreateOrder()

  return (
    <>
      {Object.keys(cart).length != 0 ? (
        <div className="fullcart">
          <div className="fullcart__wrapper">
            <div className="fullcart__wrapper1">
              <div className="fullcart__wrapper__list">
                <div className="fullcart__header">Ваша корзина</div>
                {Object.entries(cart).map(([key, value]) => (
                  <CartItem product={value} key={key} />
                ))}
              </div>
              <div className="cartifull__personinfo">
                <div className="fullcart__header">Информация о заказе</div>
                <div className="inputs">
                  <div style={{ width: "100%" }}>
                    <input
                      style={{ width: "100%" }}
                      className="input__info"
                      onChange={formName.onChange}
                      type="name"
                      name={formName.name}
                      onBlur={formName.onBlur}
                      ref={formName.ref}
                      required
                      placeholder="ФИО"
                    />
                    <p style={{ color: "red" }}>
                      {formState.errors?.["name"]?.["message"] as string}
                    </p>
                  </div>
                  <div>
                    <input
                      style={{ width: "100%" }}
                      className="input__info"
                      type="text"
                      onChange={formPhone.onChange}
                      name={formPhone.name}
                      ref={formPhone.ref}
                      onBlur={formPhone.onBlur}
                      placeholder="Телефон"
                    />

                    <p style={{ color: "red" }}>
                      {formState.errors?.["phone"]?.["message"] as string}
                    </p>
                  </div>
                </div>
                <div className="inputs">
                  <input
                    className="input__info"
                    onChange={formEMail.onChange}
                    name={formEMail.name}
                    ref={formEMail.ref}
                    onBlur={formEMail.onBlur}
                    type="text"
                    placeholder="Почта"
                  />
                  <input
                    className="input__info"
                    onChange={formComment.onChange}
                    name={formComment.name}
                    ref={formComment.ref}
                    onBlur={formComment.onBlur}
                    type="text"
                    placeholder="Комментрий"
                  />
                </div>

                <div>
                  Если у вас есть карта постоянного клиента, пожалуйста введите
                  ее номер в комментарий
                </div>
                <div className="delivery__header">Выберите способ доставки</div>
                <div className="delivery__buttons">
                  <button
                    className={deliveryWay === "самовывоз" ? "active" : ""}
                    onClick={() => {
                      setValue("deliveryWay", "самовывоз")
                    }}
                  >
                    Самовывоз
                  </button>
                  <button
                    className={deliveryWay === "курьер" ? "active" : ""}
                    onClick={() => {
                      setValue("deliveryWay", "курьер")
                    }}
                  >
                    Курьером
                  </button>
                  <button
                    className={deliveryWay === "тк" ? "active" : ""}
                    onClick={() => {
                      setValue("deliveryWay", "тк")
                    }}
                  >
                    Транспортной компанией
                  </button>
                </div>
                {deliveryWay === "курьер" ? (
                  <div>
                    <div>
                      <input
                        className="delivery__input"
                        type="text"
                        placeholder="Адрес доставки"
                      />
                    </div>
                    <div>
                      <input
                        className="delivery__input"
                        type="text"
                        placeholder="Желаемая дата и время (интервал) доставки"
                      />
                    </div>
                    <div className="delivery__info">
                      {/* Информация о выбранном способе доставки: */}
                      <div className="delivery__info__item">
                        Доставка курьером - 250 рублей по городу или бесплатно
                        при заказе на сумму от 1500 (без учета мыльной основы).
                        В поле выше вы можете написать желаемый интервал
                        доставки и мы перезвоним вам для согласования
                        конкретного времени <br />
                        Подробнее про условия доставки и стоимость
                        <Link to={"/delivery"}>
                          <span
                            style={{
                              textDecoration: "underline",
                              color: "#c1a88a",
                            }}
                          >
                            {" "}
                            здесь
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {deliveryWay === "тк" ? (
                  <div>
                    <div>
                      <input
                        className="delivery__input"
                        type="text"
                        placeholder="Укажите адрес доставки"
                      />
                    </div>
                    <div className="delivery__info">
                      {/* Информация о выбранном способе доставки: */}
                      <div className="delivery__info__item">
                        Доставка транспортной компанией - стоимость
                        расчитывается индивидуально. Напишите адрес доставки и
                        мы перезвоним вам для уточнения деталей доставки
                        <br />
                        Подробнее про условия доставки и стоимость
                        <Link to={"/delivery"}>
                          <span
                            style={{
                              textDecoration: "underline",
                              color: "#c1a88a",
                            }}
                          >
                            {" "}
                            здесь
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {deliveryWay === "самовывоз" ? (
                  <div>
                    <div className="delivery__info">
                      <div className="delivery__info__item">
                        Самовывоз или ваш Яндекс Курьер. Мы соберем заказ и
                        позвоним, как только он будет готов. Примерное время
                        сбора заказа после оформления до 1 часа.
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="fullcart__wrapper__info">
              <div className="toorder__wrapper">
                <div className="toorder">
                  <p className="fz__22">Итого</p>
                  <div className="toorder__element">
                    <div>Товары</div>
                    <div>{totalPrice + "₽"}</div>
                  </div>
                  <div className="toorder__element">
                    <div>Доставка</div>
                    <div>{deliveryPrice}</div>
                  </div>
                  <div className="toorder__element">
                    <div>К оплате</div>
                    <div>{deliveryPrice + "₽"}</div>
                  </div>
                  <div onClick={createOrder} className="order__button">
                    Оформить заказ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart__empty">В вашей корзине пока пусто</div>
      )}
    </>
  )
}
