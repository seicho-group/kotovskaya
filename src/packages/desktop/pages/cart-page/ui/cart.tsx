import "./cart.css"
import { useCartState } from "../../../entities/product-card/product-card"
import { CartItem } from "./cart-item/cart-item"
import { useState } from "react"
import cbempty from "src/shared/assets/checkboxempty.svg"
import cb from "src/shared/assets/checkbox.svg"
import axios from "axios"
import { API_URL } from "src/shared/api/config"
import { FormProvider, useForm } from "react-hook-form"
import { Product } from "src/shared/types/product"

export function Cart() {
  const form = useForm({ reValidateMode: "onBlur" })
  const { cart } = useCartState()
  // const nonNullCartItems = Object.entries(cart).filter(
  //   ([key, value]) => value > 0
  // );]
  const totalPrice = Object.keys(cart).reduce((previous, key) => {
    return (
      previous + ((cart[key]?.price || 0) * (cart[key]?.quantity || 0)) / 100
    )
  }, 0)
  const [smsNeeded, setSmsNeeded] = useState(false)

  function sendOrder() {
    form.handleSubmit(
      (formValues) => {
        console.log(formValues)
        axios.post(`${API_URL}/order/make_order`, formValues)
      },
      (e) => console.log(e),
    )()
  }

  /**
   * {
   *     name: dskjfgbndjikgn
   *     phone: 89082442323 -> 9082442323
   *     emaiL: vdfjbvhjdf@gm.com
   * }
   *
   * */

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
  form.register<string>("deliveryWay")

  return (
    <FormProvider {...form}>
      <div>
        {Object.keys(cart).length != 0 ? (
          <div className={"fullcart"}>
            <div className="fullcart__wrapper">
              <div className="fullcart__wrapper1">
                <div className="fullcart__wrapper__list">
                  <div className="fullcart__header">Ваша корзина</div>
                  {Object.entries(cart).map(([key, value]) => {
                    return (
                      <CartItem
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
                <div className="cartifull__personinfo">
                  <div className="fullcart__header">Информация о заказе</div>
                  <div className="inputs">
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
                  <div className="inputs">
                    <input
                      onChange={formEMail.onChange}
                      name={formEMail.name}
                      ref={formEMail.ref}
                      onBlur={formEMail.onBlur}
                      type="text"
                      placeholder="Почта"
                    />
                    <input
                      onChange={formComment.onChange}
                      name={formComment.name}
                      ref={formComment.ref}
                      onBlur={formComment.onBlur}
                      type="text"
                      placeholder="Комментрий"
                    />
                  </div>
                  <div>Выберите способ доставки</div>
                  <div className="delivery__buttons">
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
                        Информация о выбранном способе доставки:
                        <div className="delivery__info__item">
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
                          className="delivery__input"
                          type="text"
                          placeholder="Укажите адрес доставки"
                        />
                      </div>
                      <div className="delivery__info">
                        Информация о выбранном способе доставки:
                        <div className="delivery__info__item">
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
                      <div className="checkbox__area">
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
                      </div>
                      <div className="delivery__info">
                        Информация о выбранном способе доставки:
                        <div className="delivery__info__item">
                          Самовывоз - бесплатно. Мы заранее соберем заказ и
                          позвоним или напишем (нажмите галочку выше) как только
                          он будет готов.
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
                      <div>0</div>
                    </div>
                    <div className="toorder__element">
                      <div>К оплате</div>
                      <div>{totalPrice + "₽"}</div>
                    </div>
                    <div onClick={sendOrder} className="order__button">
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
      </div>
    </FormProvider>
  )
}
