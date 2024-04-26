import "./delivery-information.css";
import express1 from "src/shared/assets/express.svg";

export function DeliveryInformation() {
  return (
    <div className="delivery">
      <div className="delivery__wrapper">
        <div>
          <div className="h1__block">
            <span className="h1">Доставка</span>
          </div>
          <div>
            <div className="h2 bottom25">
              Курьерская доставка по Екатеринбургу
            </div>
            <div className="bottom25">
              {" "}
              <span className="beige">Бесплатная доставка</span> - при сумме
              заказа более 1500 рублей кроме мыльной основы (т.е. в Вашем заказе
              может быть любое количество мыльной основы, но она не идет в счет
              суммы минимального заказа для бесплатной доставки).
            </div>
            <div className="bottom25">
              <span className="beige">250 рублей</span> - при сумме заказа менее
              1500 рублей{" "}
            </div>
            <div>Доставка осуществляется с 10:00 до 22:00 ежедневно</div>
            <div className="dirrow">
              <div className="h2 bottom25">
                Экспресс-доставка по Екатеринбургу <img src={express1} alt="" />
              </div>
            </div>
            <div>
              Доставка в течение <span className="beige">3 часов</span> с
              момента оформления <span className="beige">+99 рублей</span>  к
              стоимости
            </div>
            <div className="h2 bottom25">
              Доставка транспортной комапнией в другие города
            </div>
            <div className="bottom50">
              Минимальная сумма заказа для отправки почтой или ТК составляет 500
              рублей, вес заказа - любой. Готовый к выдаче заказ резервируется
              на 5 календарных дней, если за это время не поступает оплата – Ваш
              заказ аннулируется.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
