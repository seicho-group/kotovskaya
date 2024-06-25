import "./delivery-information.css"
import { Helmet } from "react-helmet"
import { Text } from "./../../../../../../shared/ui/text/text"
import { ContentWrapper } from "src/widgets/content-wrapper/content-wrapper"
export function DeliveryInformation() {
  return (
    // <div className="delivery">
    <ContentWrapper>
      <Helmet title={"Доставка"} />
      <div>
        <div className="h1__block">
          {/* <span className="h1">Доставка</span> */}
          <Text variant={"title"}>Доставка</Text>
        </div>
        <div>
          <div
            style={{ marginTop: "40px", textDecoration: "underline" }}
            className="h2 bottom25"
          >
            Курьерская доставка по Екатеринбургу
          </div>
          <div className="bottom25">
            <span className="beige">Бесплатная доставка</span> - при сумме
            заказа более 1500 рублей кроме мыльной основы (т.е. в Вашем заказе
            может быть любое количество мыльной основы, но она не идет в счет
            суммы минимального заказа для бесплатной доставки).
          </div>
          <div className="bottom25">
            *Бесплатная доставка в отдаленные районы (Кольцово, Изоплит, Химмаш,
            Птицефабрика, Широкая речка, Компрессорный, Сортировка, Эльмаш,
            Уралмаш) осуществляется при сумме заказа не менее 2000 р, КРОМЕ
            мыльной основы.
          </div>
          <div className="bottom25">
            <span className="beige">150 - 300 рублей</span> (в зависимости от
            удаленности от центра города) - при сумме заказа менее 1500 рублей{" "}
          </div>
          <div>
            Доставка осуществляется ежедневно с 12:00 до 20:00 ежедневно
          </div>

          <div
            style={{ marginTop: "40px", textDecoration: "underline" }}
            className="h2 bottom25"
          >
            Доставка транспортной компанией в другие города
          </div>
          <div>
            Отправляем Почтой Росии, ТК СДЭК, ПЭК, КИТ, Энергия (другие
            транспортные компании - по согласованию) Минимальная сумма заказа
            для отправки почтой или ТК составляет 500 рублей, вес заказа -
            любой. Заказы ТК СДЭК отправляем от любой суммы. Готовый к выдаче
            заказ резервируется на 5 календарных дней, если за это время не
            поступает оплата – Ваш заказ аннулируется.
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}
