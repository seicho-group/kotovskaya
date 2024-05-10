import "./products-list.css"
import mock from "src/shared/assets/mockphoto.png"
import { ProductCard } from "../../../entities/product-card/product-card"
import showall from "src/shared/assets/showall.svg"
import { ProductDTO } from "src/shared/types/productDTO"
import { Link } from "react-router-dom"

type Props = {
  productsArray: ProductDTO[]
  categoryName: string
  linkTo?: string
}

// todo: избавиться от двойных тернарников
export function ProductsList({ categoryName, productsArray, linkTo }: Props) {
  return (
    <div>
      {productsArray.length ? (
        <div className="productspromo">
          <div className="productspromo__header">
            <div className="wrapper">{categoryName}</div>
          </div>
          <div className="productspromo__main">
            <div className="productspromo__grid">
              {productsArray.map((product: ProductDTO) => (
                <ProductCard product={product} />
              ))}
            </div>
          </div>
          <div className="productspromo__footer">
            {linkTo ? (
              <Link to={linkTo}>
                <div className="wrapper">
                  <p>смотреть все</p>
                  <img src={showall} alt="" />
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
