import "./burger-mobile.css"
import { Link } from "react-router-dom"
import vk from "src/shared/assets/vk 3.svg"
import wa from "src/shared/assets/wa.svg"
import tg from "src/shared/assets/tg.svg"
export function BurgerMobile(props: any) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        props.setBurgerClicked(false)
        document.body.style.overflow = "auto"
      }}
      className="burger__forclick"
    >
      <div className="burger" onClick={(e) => e.stopPropagation()}>
        <div className="burger__items">
          <Link to={"/delivery"}>
            <div
              onClick={() => {
                props.setBurgerClicked(false)
                document.body.style.overflow = "auto"
              }}
              className="burger__item"
            >
              <p>доставка</p>
            </div>
          </Link>
          <Link to={"/contacts"}>
            <div
              onClick={() => {
                props.setBurgerClicked(false)
                document.body.style.overflow = "auto"
              }}
              className="burger__item"
            >
              <p>контакты</p>
            </div>
          </Link>
        </div>
        <div className="burger__item">
          <p>Мы в соцсетях</p>
          <div className="smblock">
            <a href="https://vk.com/kotovskaya_soap">
              <img src={vk} alt="" />
            </a>
            <a href="https://t.me/+79827544397">
              <img src={wa} alt="" />
            </a>
            <a href="https://wa.me/+79827544397">
              <img src={tg} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
