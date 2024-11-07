import "./kotovskaya-contacts.css"
import map from "src/shared/assets/contacts__photo.png"
import vk from "src/shared/assets/vk.svg"
import tg from "src/shared/assets/tg.svg"
import wa from "src/shared/assets/wa.svg"
import { formatPhone } from "src/pages/cart-page/lib/cart-form-validators"
import { Helmet } from "react-helmet"
import { phoneNumber } from "src/shared/const"

export function KotovskayaContacts() {
  return (
    <div className="contacts">
      <div className="contacts__wrapper bottom50">
        <div className="h1 bottom25">Контакты</div>
        <div className="contacts__grid">
          <div className="left25">
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
