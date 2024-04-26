import "./cart-mobile.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartState } from "src/packages/mobile/entities/product-card-mobile";
import { CartItemMobile } from "src/packages/mobile/entities/cart-item-mobile/cart-item-mobile";

export function CartMobile() {
  const { cart } = useCartState();
  // const nonNullCartItems = Object.entries(cart).filter(
  //   ([key, value]) => value > 0
  // );]
  const totalPrice = Object.keys(cart).reduce((previous, key) => {
    return (
      previous + ((cart[key]?.price || 0) * (cart[key]?.quantity || 0)) / 100
    );
  }, 0);
  console.log(totalPrice);
  const [deliveryWay, setDeliveryWay] = useState("");
  const [smsNeeded, setSmsNeeded] = useState(false);

  return (
    <div>
      {Object.keys(cart).length != 0 ? (
        <div className={"fullcart"}>
          <div className="fullcart__wrapper">
            <div className="fullcart__wrapper1">
              <div className="fullcart__wrapper__list">
                <div className="fullcart__header">Ваша корзина</div>
                {Object.entries(cart).map(([key, value]) => {
                  console.log(value.quantity);
                  return (
                    <CartItemMobile
                      name={value.name}
                      id={key}
                      price={value.price / 100 + "₽"}
                      quantity={value.quantity}
                      photo={`http://95.182.120.200:8080/images/${key}`}
                    />
                  );
                })}
              </div>
              <div className="cartifull__personinfo">
                <div className="fullcart__header">Информация о заказе</div>
                <div className="inputs">
                  <input type="tel" required placeholder="ФИО" />
                  <input type="tel" placeholder="Телефон" />
                </div>
                <div className="inputs">
                  <input type="tel" required placeholder="Почта" />
                </div>
                <div className="inputs__comment">
                  <input type="tel" placeholder="Комментарий" />
                </div>
                <div className="fullcart__header">Выберите способ доставки</div>
                <div className="delivery__buttons">
                  <button
                    className={deliveryWay === "самовывоз" ? "active" : ""}
                    onClick={() => setDeliveryWay("самовывоз")}
                  >
                    Самовывоз
                  </button>
                  <button
                    className={deliveryWay === "курьер" ? "active" : ""}
                    onClick={() => setDeliveryWay("курьер")}
                  >
                    Курьером
                  </button>
                  <button
                    className={deliveryWay === "тк" ? "active" : ""}
                    onClick={() => setDeliveryWay("тк")}
                  >
                    ТК
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
                        при заказе на сумму от 1200 (без учета мыльной основы).
                        В поле выше вы можете написать желаемый интервал
                        доставки и мы перезвоним вам для соласования конкретного
                        времени
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
                  <Link to="/ordered" className="order__button">
                    Оформить заказ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart__empty">В вашей корзине пока пусто</div>
      )}
    </div>
  );
}
