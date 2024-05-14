import "./cart-mobile.css"
import { Link } from "react-router-dom"
import { CartItemMobile } from "src/packages/mobile/entities/cart-item-mobile/cart-item-mobile"
import { FormProvider, useForm } from "react-hook-form"
import axios, { AxiosResponse } from "axios"
import { API_URL } from "src/shared/api/config"
import { getOrderRequestByFormValues } from "src/packages/desktop/features/order/model/order-request"
import { OrderForm } from "src/packages/desktop/features/order/model/order-form"
import { useCartStore } from "src/entities/cart/model/cart-store"
import { useNavigate } from "react-router-dom"
import { useOrderIdStore } from "src/packages/desktop/pages/cart-page/ui/cart"

export function CartMobile() {
  const form = useForm<OrderForm>({ reValidateMode: "onBlur" })
  const { cart } = useCartStore()
  const totalPrice = Object.keys(cart).reduce((previous, key) => {
    return (
      previous + ((cart[key]?.price || 0) * (cart[key]?.accumulator || 0)) / 100
    )
  }, 0)
  const { orderId, setOrderId } = useOrderIdStore()
  const navigate = useNavigate()
  function sendOrder() {
    form.handleSubmit(
      async (formValues) => {
        const id: AxiosResponse<string> = await axios.post(
          `${API_URL}/order/make_order`,
          getOrderRequestByFormValues(formValues, Object.values(cart)),
        )
        setOrderId(id.data)
        navigate("/ordered")
      },
      (e) => console.log(e),
    )()
  }
  console.log(orderId)

  const deliveryWay = form.watch("deliveryWay")

  const formName = form.register("name", {
    required: true,
  })
  const formPhone = form.register("phone", {
    validate: (text?: string) =>
      ((text?.startsWith("8") || text?.startsWith("+7")) &&
        text.length === 11) ||
      "Телефон не отвечает правилам валидации",
  })
  const formEMail = form.register("email", {
    validate: (text?: string) => text?.includes("@") && text.length > 5,
  })
  const formComment = form.register("comment")
  form.register("deliveryWay")

  return (
    <FormProvider {...form}>
      <div>
        {Object.keys(cart).length != 0 ? (
          <div className={"fullcart__mobile"}>
            <div className="fullcart__wrappe__mobile">
              <div className="fullcart__wrapper1__mobile">
                <div className="fullcart__wrapper__list__mobile">
                  <div className="fullcart__header__mobile">Ваша корзина</div>
                  {Object.entries(cart).map(([key, value]) => {
                    return (
                      <CartItemMobile
                        name={value.name}
                        id={key}
                        price={value.price / 100 + "₽"}
                        quantity={value.quantity}
                        accumulator={value.accumulator}
                        photo={`http://95.182.120.200:8080/images/${key}`}
                      />
                    )
                  })}
                </div>
                <div className="cartifull__personinfo__mobile">
                  <div className="fullcart__header__mobile">
                    Информация о заказе
                  </div>
                  <div className="inputs__mobile">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <input
                        onChange={formName.onChange}
                        type="name"
                        name={formName.name}
                        onBlur={formName.onBlur}
                        ref={formName.ref}
                        required
                        placeholder="ФИО"
                      />
                      <p style={{ color: "red" }}>
                        {form.formState.errors?.["name"]?.["message"] as string}
                      </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <input
                        type="text"
                        onChange={formPhone.onChange}
                        name={formPhone.name}
                        ref={formPhone.ref}
                        onBlur={formPhone.onBlur}
                        placeholder="Телефон"
                      />

                      <p style={{ color: "red" }}>
                        {
                          form.formState.errors?.["phone"]?.[
                            "message"
                          ] as string
                        }
                      </p>
                    </div>
                  </div>
                  <div className="inputs__comment__mobile">
                    <input
                      onChange={formEMail.onChange}
                      name={formEMail.name}
                      ref={formEMail.ref}
                      onBlur={formEMail.onBlur}
                      type="text"
                      placeholder="Почта"
                    />
                  </div>
                  <div className="inputs__comment__mobile">
                    <input
                      onChange={formComment.onChange}
                      name={formComment.name}
                      ref={formComment.ref}
                      onBlur={formComment.onBlur}
                      type="text"
                      placeholder="Комментрий"
                    />
                  </div>
                  <div className="fullcart__header__mobile">
                    Выберите способ доставки
                  </div>
                  <div className="delivery__buttons__mobile">
                    <button
                      className={deliveryWay === "самовывоз" ? "active" : ""}
                      onClick={() => form.setValue("deliveryWay", "самовывоз")}
                    >
                      Самовывоз
                    </button>
                    <button
                      className={deliveryWay === "курьер" ? "active" : ""}
                      onClick={() => form.setValue("deliveryWay", "курьер")}
                    >
                      Курьером
                    </button>
                    <button
                      className={deliveryWay === "тк" ? "active" : ""}
                      onClick={() => form.setValue("deliveryWay", "тк")}
                    >
                      ТК
                    </button>
                  </div>
                  {deliveryWay === "курьер" ? (
                    <div>
                      <div>
                        <input
                          className="delivery__input__mobile"
                          type="text"
                          placeholder="Адрес доставки"
                        />
                      </div>
                      <div>
                        <input
                          className="delivery__input__mobile"
                          type="text"
                          placeholder="Желаемая дата и время (интервал) доставки"
                        />
                      </div>
                      <div className="delivery__info__mobile">
                        Информация о выбранном способе доставки:
                        <div className="delivery__info__item__mobile">
                          Доставка курьером - 200 рублей по городу или бесплатно
                          при заказе на сумму от 1200 (без учета мыльной
                          основы). В поле выше вы можете написать желаемый
                          интервал доставки и мы перезвоним вам для соласования
                          конкретного времени
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
                          className="delivery__input__mobile"
                          type="text"
                          placeholder="Укажите адрес доставки"
                        />
                      </div>
                      <div className="delivery__info__mobile">
                        Информация о выбранном способе доставки:
                        <div className="delivery__info__item__mobile">
                          Доставка транспортной компанией - стоимость
                          расчитывается индивидуально. Напишите адрес доставки и
                          мы перезвоним вам для уточнения деталей доставки
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {deliveryWay === "самовывоз" ? (
                    <div>
                      {/* <div className="checkbox__area">
                      {smsNeeded ? (
                        <div>
                          <img
                            onClick={() => {
                              setSmsNeeded(false)
                            }}
                            src={cb}
                            alt=""
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            onClick={() => {
                              setSmsNeeded(true)
                            }}
                            src={cbempty}
                            alt=""
                          />
                        </div>
                      )}
                      <div className="checkbox__area__text">
                        Звонок не требуется (уведомление о том, что заказ вас
                        ожидает придет по смс)
                      </div>
                    </div> */}
                      <div className="delivery__info__mobile">
                        {/* Информация о выбранном способе доставки: */}
                        <div className="delivery__info__item__mobile">
                          <b>Самовывоз или ваш Яндекс Курьер.</b> Мы заранее
                          соберем заказ и позвоним, как только он будет готов.
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/*<div className="delivery__info">*/}
                  {/*  Информация о способах доставки:*/}
                  {/*  <div className="delivery__info__item">*/}
                  {/*    Самовывоз - бесплатно. Заказ заранее собирают*/}
                  {/*  </div>*/}
                  {/*  <div className="delivery__info__item">*/}
                  {/*    Курьером - 200 рублей или бесплатно при заказе от 1200*/}
                  {/*  </div>*/}
                  {/*  <div className="delivery__info__item">*/}
                  {/*    ТК - стоимость расчитывается индивидуально. После выбора*/}
                  {/*    этого способа доставки вам позвонят для уточнения деталей*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </div>
              <div className="fullcart__wrapper__info__mobile">
                <div className="toorder__wrapper__mobile">
                  <div className="toorder__mobile">
                    <p className="fz__22">Итого</p>
                    <div className="toorder__element__mobile">
                      <div>Товары</div>
                      <div>{totalPrice + "₽"}</div>
                    </div>
                    <div className="toorder__element__mobile">
                      <div>Доставка</div>
                      <div>0</div>
                    </div>
                    <div className="toorder__element__mobile">
                      <div>К оплате</div>
                      <div>{totalPrice + "₽"}</div>
                    </div>
                    <Link
                      onClick={sendOrder}
                      to="/ordered"
                      className="order__button__mobile"
                    >
                      Оформить заказ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart__empty__mobile">В вашей корзине пока пусто</div>
        )}
      </div>
    </FormProvider>
  )
}
