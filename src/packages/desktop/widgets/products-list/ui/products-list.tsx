import "./products-list.css"
import mock from "src/shared/assets/mockphoto.png"
import { ProductCard } from "../../../entities/product-card/product-card"
import showall from "src/shared/assets/showall.svg"
import { ProductDTO } from "src/shared/types/productDTO"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { IsMobileContext } from "src/app/app"
import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"
import { CategoryPanel } from "src/packages/mobile/entities/category-panel"
import { Subcategory } from "src/packages/desktop/entities/subcategory/subcategory"

type Props = {
  productsArray: ProductDTO[]
  categoryName?: string
  subcategoryArray?: Category[]
  linkTo?: string
}

export function ProductsList({
  categoryName,
  productsArray,
  linkTo,
  subcategoryArray,
}: Props) {
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
      {categoryName ? (
        <div
          className={
            isMobile ? "productspromo__header__mobile" : "productspromo__header"
          }
        >
          <div
            className="wrapper"
            style={{
              width: isMobile ? "100%" : "1300px",
              height: isMobile ? "50px" : "",
            }}
          >
            {categoryName}
          </div>
        </div>
      ) : null}

      {subcategoryArray && (
        <div className="fff">
          {subcategoryArray?.map((element: any) => (
            <CategoryPanel key={element.category_id} category={element} />
          ))}
        </div>
      )}
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
              style={{ width: isMobile ? "100vw" : "1300px" }}
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
