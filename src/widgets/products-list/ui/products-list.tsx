import styles from "./products-list.module.css"
import { ProductCard } from "src/widgets/product-card/product-card"
import { ProductDTO } from "src/shared/types/productDTO"
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
  if (!productsArray) {
    return (
      <div className={styles.productsListContainer}>
        <div className={styles.productsListTitle}>
          <div className={sharedStyles.contentWrapper}>{categoryName}</div>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.productsListContainer}>
      {categoryName ? (
        <div
          className={sharedStyles.contentWrapper}
          style={{
            paddingTop: "50px",
          }}
        >
          <h2>{categoryName}</h2>
        </div>
      ) : null}

      {subcategoryArray && (
        <div className={styles.productsListSubcategories}>
          <div className="fff">
            {subcategoryArray?.map((element: any) => (
              <CategoryPanel key={element.id} category={element} />
            ))}
          </div>
        </div>
      )}
      <div className={styles.productsListMain}>
        <div className={styles.productsListItems}>
          {productsArray.map((product: ProductDTO) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
