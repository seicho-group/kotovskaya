import { ContentWrapper } from "src/widgets/content-wrapper/content-wrapper"
import { Text } from "src/shared/ui/text/text"
import { ProductDTO } from "src/shared/types/productDTO"
import { FC } from "react"
import { ProductsList } from "src/widgets/products-list/ui/products-list"
import styles from "./category-info.module.css"
import { CategoryPanel } from "src/widgets/category-panel/category-panel"
import { Category } from "src/shared/types/category"

type TProps = {
  categoryName: string
  productsArray: ProductDTO[]
  subcategoryArray?: Category[]
}

export const CategoryInfo: FC<TProps> = ({
  categoryName,
  productsArray,
  subcategoryArray,
}) => {
  return (
    <ContentWrapper>
      <Text variant={"title"}>{categoryName}</Text>
      {subcategoryArray && (
        <div className={styles.subcategoriesLayout}>
          {subcategoryArray
            ?.sort((cat1, cat2) => cat2.name.length - cat1.name.length)
            .map((element: any) => (
              <CategoryPanel key={element.id} category={element} />
            ))}
        </div>
      )}
      <ProductsList productsArray={productsArray} />
    </ContentWrapper>
  )
}
