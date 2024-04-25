import "./products-list.css";
import mock from "./../../assets/mockphoto.png";
import { ProductCard } from "../../../../../entities/productCard/productCard";
import showall from "./../../assets/showall.svg";
import { Product } from "../../../../../shared/types/product";
import { Link } from "react-router-dom";

export function ProductsList(props: any) {
  const productsArray: Product[] = props.array;

  return (
    <div>
      {productsArray.length ? (
        <div className="productspromo">
          <div className="productspromo__header">
            <div className="wrapper">{props.category}</div>
          </div>
          <div className="productspromo__main">
            <div className="productspromo__grid">
              {productsArray.map((product: Product) => {
                console.log(product.id);
                return (
                  <ProductCard
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
          <div className="productspromo__footer">
            <Link to={props.link}>
              <div className="wrapper">
                <p>смотреть все</p>
                <img src={showall} alt="" />
              </div>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
