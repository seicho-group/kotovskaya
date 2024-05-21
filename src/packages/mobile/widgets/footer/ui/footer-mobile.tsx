import "./footer-mobile.css"
import { phoneNumber } from "src/shared/static-info/phone-number"
import { formatPhone } from "src/packages/desktop/pages/cart-page/lib/cart-form-validators"
export function FooterMobile() {
  return (
    <div className="footer__mobile">
      <div className="footer__mobile__wrapper">
        <div className="margintop">
          <div className="fs18">
            <p>{formatPhone(phoneNumber)}</p>
          </div>
          <div>
            <p>
              г. Екатеринбург <br /> ул. Ленина 24/8
            </p>
          </div>
        </div>
        <div className="marginbottom">
          <p>@Мыловарня мадам Котовской 2024</p>
        </div>
      </div>
    </div>
  )
}
