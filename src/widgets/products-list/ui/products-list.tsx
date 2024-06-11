import styles from "./products-list.module.css"
import { ProductCard } from "src/widgets/product-card/product-card"
import { ProductDTO } from "src/shared/types/productDTO"
import { Category } from "src/packages/mobile/pages/soapmaking/soapmaking"
import { CategoryPanel } from "src/packages/mobile/entities/category-panel"
import { Text } from "src/shared/ui/text/text"
import { ContentWrapper } from "src/widgets/content-wrapper/content-wrapper"

type Props = {
  productsArray: ProductDTO[]
  subcategoryArray?: Category[]
  linkTo?: string
}

export function ProductsList({ productsArray, subcategoryArray }: Props) {
  if (!productsArray) {
    throw new Error("Компонент ProductsList вызван с нулевым массивом")
  }
  return (
    <ContentWrapper>
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
    </ContentWrapper>
  )
}
