import './ContactMobile.css'
import photo from './../../assets/contacts__photo.png'
import vk from './../../assets/vk.svg'
import tg from './../../assets/tg.svg'
import wa from "./../../assets/wa.svg"

export function ContactsMobile() {
  return (<>
  <div>
    <div className='h1 contacts__item'>Контакты</div>
    <div className='contacts__item'>
      <p>Адрес</p>
      <p>Мы находимся в самом центре Екатеринбурга по адресу: <br /> пр.
              Ленина, 24/8 (вход через БЦ Ленина 24, сквозной проход)</p>
    </div>
    <div className='contacts__item'>
      <p>График работы</p>
      <p> пн-пт: с 11:00 до 19:00 <br />
              сб: с 11:00 до 18:00 <br />
              вс: выходной</p>
    </div>
    <div className='contacts__item'>
      <p>Телефон</p>
      <p>+7 908 787 56 56</p>
    </div>
    <div className='contacts__item'>
      <p>Почта</p>
      <p>mkotovskaya@gmail.com</p>
    </div>
    <div className='contacts__item'>
      <p>Мы в социальных сетях</p>
    </div>
    <div className="contacts__socials contacts__item">
              <div>
                <a href="https://vk.com/kotovskaya_soap">
                  <img src={vk} alt="" />
                </a>
              </div>
              <div className="left5">
                <a href="https://vk.com/kotovskaya_soap">
                  <img src={tg} alt="" />
                </a>
              </div>
              <div className="left5">
                <a href="https://vk.com/kotovskaya_soap">
                  <img src={wa} alt="" />
                </a>
              </div>
            </div>
            <img className='contacts__item contacts__item__image' src={photo} alt="" />
    </div>
    {/* <div className="contacts">
      <div className="contacts__wrapper bottom50">
        <div className="h1 bottom25">Контакты</div>
        <div className="contacts__grid">
          <img src={photo} alt="" />
          <div className="left25">
            <div className="bottom10">Адрес</div>
            <div className="bottom25">
              Мы находимся в самом центре Екатеринбурга по адресу: <br /> пр.
              Ленина, 24/8 (вход через БЦ Ленина 24, сквозной проход)
            </div>
            <div className="bottom10">График работы</div>
            <div className="bottom25">
              пн-пт: с 11:00 до 19:00 <br />
              сб: с 11:00 до 18:00 <br />
              вс: выходной
            </div>
            <div className="bottom10">Телефон</div>
            <div className="bottom25">+7 908 787 56 56</div>
            <div className="bottom10">Почта</div>
            <div className="bottom25">mkotovskaya@gmail.com</div>
            <div className="bottom10">Мы в социальных сетях</div>
            <div className="contacts__socials">
              <div>
                <a href="https://vk.com/kotovskaya_soap">
                  <img src={vk} alt="" />
                </a>
              </div>
              <div className="left5">
                <a href="https://vk.com/kotovskaya_soap">
                  <img src={tg} alt="" />
                </a>
              </div>
              <div className="left5">
                <a href="https://vk.com/kotovskaya_soap">
                  <img src={wa} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  )
}
