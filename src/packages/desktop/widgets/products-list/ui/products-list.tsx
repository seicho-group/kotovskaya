import "./products-list.css"
import mock from "src/shared/assets/mockphoto.png"
import { ProductCard } from "../../../entities/product-card/product-card"
import showall from "src/shared/assets/showall.svg"
import { ProductDTO } from "src/shared/types/productDTO"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { IsMobileContext } from "src/app/app"

type Props = {
  productsArray: ProductDTO[]
  categoryName: string
  linkTo?: string
}

export function ProductsList({ categoryName, productsArray, linkTo }: Props) {
  const { isMobile } = useContext(IsMobileContext)

  if (!productsArray) {
    return (
      <div className="productspromo">
        <div className="productspromo__header">
          <div className="wrapper">{categoryName}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="productspromo">
      <div className="productspromo__header">
        <div
          className="wrapper"
          style={{ width: isMobile ? "100%" : "1300px" }}
        >
          {categoryName}
        </div>
      </div>
      <div className="productspromo__main">
        <div className="productspromo__grid">
          {productsArray.map((product: ProductDTO) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="productspromo__footer">
        {linkTo ? (
          <Link to={linkTo}>
            <div
              className="wrapper"
              style={{ width: isMobile ? "100%" : "1300px" }}
            >
              <p>смотреть все</p>
              <img src={showall} alt="" />
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  )
}
