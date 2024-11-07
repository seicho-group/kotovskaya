import "./contacts-mobile.css"
import photo from "src/shared/assets/contacts__photo.png"
import vk from "src/shared/assets/vk.svg"
import tg from "src/shared/assets/tg.svg"
import wa from "src/shared/assets/wa.svg"
import { formatPhone } from "src/pages/cart-page/lib/cart-form-validators"
import { phoneNumber } from "src/shared/const"

export function ContactsMobile() {
  return (
    <>
      <div>
        <div className="h1 contacts__item">Контакты</div>
        <div className="contacts__item">
          <p>Телефон</p>
          <p>{formatPhone(phoneNumber)}</p>
        </div>
        <div className="contacts__item">
          <p>Почта</p>
          <p>madamkotovskaya@mail.ru</p>
        </div>
        <div className="contacts__item">
          <p>Мы в социальных сетях</p>
        </div>
        <div className="contacts__socials contacts__item">
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
    </>
  )
}
