import { ProductsList } from "src/widgets/products-list/ui/products-list"
import { useQueryGetNewProducts } from "src/shared/api/use-query-get-new-products"
import { Helmet } from "react-helmet"

export function NewCategoriesPage() {
  const { data: newFullArray = [] } = useQueryGetNewProducts()
  return (
    <div>
      <Helmet title={"Новинки"} />
      <ProductsList categoryName="Новинки" productsArray={newFullArray} />
    </div>
  )
}
