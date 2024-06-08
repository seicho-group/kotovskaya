import "./kotovskaya-contacts.css"
import map from "src/shared/assets/contacts__photo.png"
import vk from "src/shared/assets/vk.svg"
import tg from "src/shared/assets/tg.svg"
import wa from "src/shared/assets/wa.svg"
import { formatPhone } from "../../../cart-page/lib/cart-form-validators"
import { phoneNumber } from "src/shared/static-info/phone-number"
import { Helmet } from "react-helmet"

export function KotovskayaContacts() {
  return (
    <div className="contacts">
      <Helmet title={"Контакты"} />
      <div className="contacts__wrapper bottom50">
        <div className="h1 bottom25">Контакты</div>
        <div className="contacts__grid">
          <img src={map} alt="" />
          <div className="left25">
            <div className="bottom10">Адрес</div>
            <div className="bottom25">
              Мы находимся в самом центре Екатеринбурга по адресу: <br /> пр.
              Ленина, 24/8 (вход через БЦ Ленина 24, сквозной проход)
            </div>
            <div className="bottom10">График работы</div>
            <div className="bottom25">
              пн: выходной <br />
              вт-пт: с 11:00 до 19:00 <br />
              сб: с 11:00 до 18:00 <br />
              вс: выходной
            </div>
            <div className="bottom10">Телефон</div>
            <div className="bottom25">{formatPhone(phoneNumber)}</div>
            <div className="bottom10">Почта</div>
            <div className="bottom25">madamkotovskaya@mail.ru</div>
            <div className="bottom10">Мы в социальных сетях</div>
            <div className="contacts__socials">
              <div>
                <a href="https://vk.com/kotovskaya_soap">
                  <img src={vk} alt="" />
                </a>
              </div>

              <div className="left5">
                <a href="https://t.me/+79827544397">
                  <img src={tg} alt="" />
                </a>
              </div>
              <div className="left5">
                <a href="https://wa.me/+79827544397">
                  <img src={wa} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
