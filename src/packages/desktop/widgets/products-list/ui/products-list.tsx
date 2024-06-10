import "./products-list.css"
import { ProductCard } from "../../../entities/product-card/product-card"
import { ProductDTO } from "src/shared/types/productDTO"
import { useContext } from "react"
import { IsMobileContext } from "src/app/app"
import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"
import { CategoryPanel } from "src/packages/mobile/entities/category-panel"
import sharedStyles from "src/shared/styles/shared.module.css"

type Props = {
  productsArray: ProductDTO[]
  categoryName?: string
  subcategoryArray?: Category[]
  linkTo?: string
}

export function ProductsList({
  categoryName,
  productsArray,
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
          className={sharedStyles.contentWrapper}
          style={{
            paddingTop: "50px",
            width: isMobile ? "100%" : "1100px",
            height: isMobile ? "50px" : "",
          }}
        >
          <h2>{categoryName}</h2>
        </div>
      ) : null}

      {subcategoryArray && (
        <div className="fff__wrapper">
          <div className="fff">
            {subcategoryArray?.map((element: any) => (
              <CategoryPanel key={element.id} category={element} />
            ))}
          </div>
        </div>
      )}
      <div className="productspromo__main">
        <div className="productspromo__grid">
          {productsArray.map((product: ProductDTO) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
