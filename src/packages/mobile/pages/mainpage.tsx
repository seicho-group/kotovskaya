import { Link } from "react-router-dom";
import longarrow from "src/shared/assets/longaarow.svg";
import shortarrow from "src/shared/assets/shortarrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "src/shared/api/config";
import { ProductsPromoMobile } from "src/packages/mobile/entities/products-promo-mobile/products-promo-mobile";
import { SliderMobile } from "src/shared/ui/slider/ui/mobile/slider-mobile";

export function MainPage() {
  const [popularArrayM, setPopularArrayM] = useState();
  const [newArrayM, setNewArrayM] = useState();
  useEffect(() => {
    axios
      .get(`${API_URL}/products/popular`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setPopularArrayM(response.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/new`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(125);
        setNewArrayM(response.data);
      });
  }, []);
  return (
    <div className="mainpage">
      <SliderMobile />
      <div className="categrptyblocks__wrapper">
        <Link to={"/soapmaking"}>
          <div className="categoryblock soap">
            <p>Мыловарение</p>
            <div className="arrowblock">
              <img src={longarrow} alt="" />
            </div>
          </div>
        </Link>
        <div className="bottomblock">
          <Link to={"/candlemaking"}>
            <div className="categoryblock2 candle">
              <p>Свечеварение</p>
              <div className="arrowblock">
                <img src={shortarrow} alt="" />
              </div>
            </div>
          </Link>
          <Link to={"/cosmetics"}>
            <div className="categoryblock2 cosmetics">
              <p>Компоненты для косметики</p>
              <div className="arrowblock">
                <img src={shortarrow} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <ProductsPromoMobile array={popularArrayM} category={"Популярное"} />
      </div>
      <div>
        <ProductsPromoMobile array={newArrayM} category={"Новинки"} />
      </div>
    </div>
  );
}
