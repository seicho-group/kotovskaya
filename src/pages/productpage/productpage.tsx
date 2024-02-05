import "./productpage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import mock from "./../../assets/mock2.jpg";

export function ProductPage(props: any) {
  const [productInfo, setProductInfo] = useState<Record<string, any> | null>(
    null
  );
  useEffect(() => {
    axios.get("http://95.182.121.35:8080/groups/get/123").then((response) => {
      setProductInfo(response.data[1]);
    });
  }, []);
  return (
    <div className="productpage">
      <div className="productpage__wrapper">
        <img src={mock} alt="" />
        <div className="productpage__rightinfo">
          <div className="productpage__name">{productInfo?.name}</div>
          <div className="productpage__description">
            Характеристики: <br />
            {productInfo?.description}
          </div>
          <div className="productpage__bottom">
            <div></div>
            <div className="productpage__bottom__button">
              <div className="productpage__price">
                {productInfo?.salePrices?.[0]?.value / 100 + "₽"}
              </div>
              <button>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
