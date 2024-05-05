import "./products-list.css"
import mock from "src/shared/assets/mockphoto.png"
import { ProductCard } from "../../../entities/product-card/product-card"
import showall from "src/shared/assets/showall.svg"
import { ProductDTO } from "src/shared/types/productDTO"
import { Link } from "react-router-dom"

export function ProductsList(props: any) {
  const productsArray: ProductDTO[] = props.array

  return (
    <div>
      {productsArray.length ? (
        <div className="productspromo">
          <div className="productspromo__header">
            <div className="wrapper">{props.category}</div>
          </div>
          <div className="productspromo__main">
            <div className="productspromo__grid">
              {productsArray.map((product: ProductDTO) => {
                console.log(product.id)
                return (
                  <ProductCard
                    id={product.id}
                    photo={mock}
                    name={product.name}
                    quantity={product.quantity}
                    price={product?.salePrices?.[0]?.value}
                  />
                )
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
  )
}
