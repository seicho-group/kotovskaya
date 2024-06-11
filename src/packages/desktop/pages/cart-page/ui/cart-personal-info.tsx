import { useFormContext } from "react-hook-form"
import { OrderForm } from "src/packages/desktop/features/order/model/order-form"
import { validatePhoneNumber } from "src/packages/desktop/pages/cart-page/lib/cart-form-validators"
import { DeliveryWay } from "src/shared/types/productDTO"
import { Link } from "react-router-dom"
import { IsMobileContext } from "src/app/app"
import { useContext } from "react"
import ReactInputMask from "react-input-mask"
import { Text } from "src/shared/ui/text/text"

export function CartPersonalInfo() {
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

  return (
    <div
      className="cartifull__personinfo"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <Text variant={"subtitle"}>Информация о заказе</Text>
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
          <ReactInputMask
            mask="+7 (999) 999-99-99"
            maskChar={null}
            style={{ width: "100%" }}
            className="input__info"
            value={watch("phone")}
            onChange={formPhone.onChange}
            name={formPhone.name}
            ref={formPhone.ref}
            placeholder="Телефон"
          />

          <p style={{ color: "red" }}>
            {formState.errors?.["phone"]?.["message"] as string}
          </p>
        </div>
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
      <Text variant={"subtitle"}>Выберите способ доставки</Text>
      <div className="delivery__buttons">
        <button
          className={deliveryWay === DeliveryWay.Self ? "active" : ""}
          onClick={() => setValue("deliveryWay", DeliveryWay.Self)}
        >
          Самовывоз
        </button>
        <button
          className={deliveryWay === DeliveryWay.Courier ? "active" : ""}
          onClick={() => setValue("deliveryWay", DeliveryWay.Courier)}
        >
          Курьером
        </button>
        <button
          className={deliveryWay === DeliveryWay.Mail ? "active" : ""}
          onClick={() => setValue("deliveryWay", DeliveryWay.Mail)}
        >
          Транспортной компанией
        </button>
      </div>
      {deliveryWay === DeliveryWay.Courier ? (
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
              Доставка курьером - 250 рублей по городу или бесплатно при заказе
              на сумму от 1500 (без учета мыльной основы). В поле выше вы можете
              написать желаемый интервал доставки и мы перезвоним вам для
              согласования конкретного времени <br />
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
      {deliveryWay === DeliveryWay.Mail ? (
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
              Доставка транспортной компанией - стоимость расчитывается
              индивидуально. Напишите адрес доставки и мы перезвоним вам для
              уточнения деталей доставки
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
      {deliveryWay === DeliveryWay.Self ? (
        <div>
          <div className="delivery__info">
            <div className="delivery__info__item">
              Самовывоз или ваш Яндекс Курьер. Мы соберем заказ и позвоним, как
              только он будет готов. Примерное время сбора заказа после
              оформления до 1 часа.
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
