import "./delivery-mobile.css"

export function DeliveryMobile() {
  return (
    <div className="delivery__mobile">
      <div className="delivery__wrapper__mobile">
        <div>
          <div className="h1__block">
            <span className="h1">Доставка</span>
          </div>
          <div>
            <div className="h2__mobile bottom25">
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
              {" "}
              *Бесплатная доставка в отдаленные районы (Кольцово, Изоплит,
              Химмаш, Птицефабрика, Широкая речка, Компрессорный, Сортировка,
              Эльмаш, Уралмаш) осуществляется при сумме заказа не менее 2000 р,
              КРОМЕ мыльной основы.
            </div>
            <div className="bottom25">
              <span className="beige">150 - 300 рублей</span> (в зависимости от
              удаленности от центра города) - при сумме заказа менее 1500 рублей{" "}
            </div>
            <div>Доставка осуществляется ежедневно с 12:00 до 20:00 </div>
            {/* <div className="dirrow">
              <div className="h2__mobile bottom25">
                Экспресс-доставка по Екатеринбургу <img src={express1} alt="" />
              </div>
            </div> */}
            {/* <div>
              Доставка в течение <span className="beige">3 часов</span> с
              момента оформления <span className="beige">+99 рублей</span>  к
              стоимости
            </div> */}
            <div className="h2__mobile bottom25">
              Доставка транспортной компанией в другие города
            </div>
            <div className="bottom50">
              Минимальная сумма заказа для отправки почтой или ТК составляет 500
              рублей, вес заказа - любой. Готовый к отправке заказ резервируется
              на 5 календарных дней, если за это время не поступает оплата – Ваш
              заказ аннулируется.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
