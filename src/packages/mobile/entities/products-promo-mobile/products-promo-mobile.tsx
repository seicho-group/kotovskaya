import "./products-promo-mobile.css";
import mock from "src/shared/mock.png";
import { Product } from "src/shared/types/product";
import { ProductCardMobile } from "../product-card-mobile";

export function ProductsPromoMobile(props: any) {
  const productsArray: Product[] = props.array;
  return (
    <div className="productspromo">
      <div className="productspromo__header">
        <div className="wrapper">{props.category}</div>
      </div>
      <div className="productspromo__main">
        <div className="productspromo__grid__mobile">
          {productsArray?.map((product: Product) => {
            console.log(product.quantity);
            return (
              <ProductCardMobile
                id={product.id}
                photo={mock}
                name={product.name}
                quantity={product.quantity}
                price={product?.salePrices?.[0]?.value}
              />
            );
          })}
        </div>
      </div>
      {/* <div className="productspromo__footer">
        <Link to={props.link}>
          <div className="wrapper">
            <p>смотреть все</p>
            <img src={showall} alt="" />
          </div>
        </Link>
      </div> */}
    </div>
  );
}