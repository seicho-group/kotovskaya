import "./product-page-mobile.css";
import { useEffect, useState } from "react";
import mock from "src/shared/assets/mock2.jpg";
import { useParams } from "react-router-dom";
import { requestProduct } from "src/shared/api/single-product/request";

export function ProductPageMobile(props: any) {
  const { id } = useParams<{ id: string }>();
  const [productInfo, setProductInfo] = useState<Record<string, any> | null>(
    null
  );
  useEffect(() => {
    if (id) {
      requestProduct(id).then((products) => setProductInfo(products));
    }
  }, [id]);

  return (
    <div className="productpage__mobile">
      <div className="productpage__wrapper__mobile">
        <div className="image__productpage">
          <img src={mock} alt="" />
        </div>

        <div className="productpage__name__mobile">{productInfo?.name}</div>
        <div className="productpage__price">
          {productInfo?.salePrices?.[0]?.value / 100 + "₽"}
        </div>
        <div className="productpage__description">
          {productInfo?.description}
        </div>
        <div className="productpage__bottom__mobile">
          <div className="productpage__bottom__button__mobile">
            <button>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}
