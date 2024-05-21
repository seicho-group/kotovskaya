import "./footer.css"
import vk from "src/shared/assets/vk.svg"
import tg from "src/shared/assets/tg.svg"
import wa from "src/shared/assets/wa.svg"

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__1stc">
          <div>
            <p className="phone">8 982 754 43-97</p>
            <p className="schedule">
              пн - выходной
              <br />
              вт-пт 11:00-19:00
              <br />
              cб 11:00-18:00
              <br />
              вс - выходной
            </p>
          </div>
          <div>
            <p className="socials">Мы в социальных сетях</p>
            <div className="socials__div">
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
            <div></div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="footer__wrapper__1stc">
          <div>
            Магазин находится по адресу г. Екатеринбург, ул. Ленина 24/8
          </div>
          <div>© 2024 Мыловарня Мадам Котовской</div>
        </div>
      </div>
    </div>
  )
}
