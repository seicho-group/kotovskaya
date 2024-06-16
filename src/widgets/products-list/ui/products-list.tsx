import styles from "./products-list.module.css"
import { ProductCard } from "src/widgets/product-card/product-card"
import { ProductDTO } from "src/shared/types/productDTO"
import { Category } from "src/shared/types/category"

type Props = {
  productsArray: ProductDTO[]
  subcategoryArray?: Category[]
}

export function ProductsList({ productsArray, subcategoryArray }: Props) {
  if (!productsArray) {
    throw new Error("Компонент ProductsList вызван с нулевым массивом")
  }
  return (
    <div className={styles.productsListMain}>
      <div className={styles.productsListItems}>
        {productsArray.map((product: ProductDTO) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
